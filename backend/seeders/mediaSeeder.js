const fs = require('fs');
const path = require('path');
const Media = require('../models/Media');

const uploadsDir = path.join(__dirname, '../uploads');

function getFileType(mimeType) {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/')) return 'video';
  return 'document';
}

function getMimeType(ext) {
  const map = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
  };
  return map[ext.toLowerCase()] || 'application/octet-stream';
}

async function seedMedia(adminUserId) {
  if (!adminUserId) {
    console.log('Media seeder: No admin user ID provided, skipping');
    return;
  }

  // Check if media already seeded
  const count = await Media.countDocuments();
  if (count > 0) {
    console.log(`Media seeder: ${count} media files already in DB, skipping`);
    return;
  }

  // Scan all files in uploads directory recursively
  const files = [];
  function scanDir(dir, prefix) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.isFile() && !entry.name.startsWith('.')) {
        const ext = path.extname(entry.name);
        const mimeType = getMimeType(ext);
        const filePath = path.join(dir, entry.name);
        const stats = fs.statSync(filePath);
        files.push({
          filename: `${prefix}${entry.name}`,
          originalName: entry.name,
          mimeType,
          size: stats.size,
          type: getFileType(mimeType),
          url: `/uploads/${prefix}${entry.name}`,
          alt: entry.name.replace(ext, '').replace(/-/g, ' '),
          uploadedBy: adminUserId,
        });
      }
    }
  }

  scanDir(uploadsDir, '');

  if (files.length === 0) {
    console.log('Media seeder: No files found in uploads directory');
    return;
  }

  await Media.insertMany(files);
  console.log(`Media seeder: Registered ${files.length} files in Media collection`);
}

module.exports = seedMedia;
