const path = require('path');
const fs = require('fs');
const Media = require('../models/Media');

function getMediaType(mimetype) {
  if (mimetype.startsWith('image/')) return 'image';
  if (mimetype.startsWith('video/')) return 'video';
  return 'document';
}

// GET /api/v1/admin/media
exports.listMedia = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 30;
    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.type && req.query.type !== 'all') {
      filter.type = req.query.type;
    }

    if (req.query.search) {
      filter.originalName = { $regex: req.query.search, $options: 'i' };
    }

    const [media, total] = await Promise.all([
      Media.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Media.countDocuments(filter),
    ]);

    res.json({
      success: true,
      media,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error('listMedia error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch media' });
  }
};

// POST /api/v1/admin/media/upload
exports.uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const file = req.file;
    const type = getMediaType(file.mimetype);

    const media = await Media.create({
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      type,
      url: `/uploads/${file.filename}`,
      uploadedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      media: {
        _id: media._id,
        url: media.url,
        filename: media.filename,
        originalName: media.originalName,
        type: media.type,
        size: media.size,
        mimeType: media.mimeType,
      },
    });
  } catch (err) {
    console.error('uploadMedia error:', err);
    res.status(500).json({ success: false, message: 'Failed to upload media' });
  }
};

// POST /api/v1/admin/media/upload-multiple
exports.uploadMultiple = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files uploaded' });
    }

    const mediaDocs = await Promise.all(
      req.files.map((file) => {
        const type = getMediaType(file.mimetype);
        return Media.create({
          filename: file.filename,
          originalName: file.originalname,
          mimeType: file.mimetype,
          size: file.size,
          type,
          url: `/uploads/${file.filename}`,
          uploadedBy: req.user._id,
        });
      })
    );

    const media = mediaDocs.map((doc) => ({
      _id: doc._id,
      url: doc.url,
      filename: doc.filename,
      originalName: doc.originalName,
      type: doc.type,
      size: doc.size,
      mimeType: doc.mimeType,
    }));

    res.status(201).json({ success: true, media });
  } catch (err) {
    console.error('uploadMultiple error:', err);
    res.status(500).json({ success: false, message: 'Failed to upload media' });
  }
};

// DELETE /api/v1/admin/media/:id
exports.deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) {
      return res.status(404).json({ success: false, message: 'Media not found' });
    }

    // Delete file from disk
    const filePath = path.join(__dirname, '../uploads', media.filename);
    fs.unlink(filePath, (err) => {
      if (err) console.error('File delete error:', err);
    });

    await Media.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: 'Media deleted successfully' });
  } catch (err) {
    console.error('deleteMedia error:', err);
    res.status(500).json({ success: false, message: 'Failed to delete media' });
  }
};

// GET /api/v1/admin/media/:id
exports.getMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) {
      return res.status(404).json({ success: false, message: 'Media not found' });
    }
    res.json({ media });
  } catch (err) {
    console.error('getMedia error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch media' });
  }
};

// PUT /api/v1/admin/media/:id
exports.updateMedia = async (req, res) => {
  try {
    const { alt } = req.body;
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      { alt },
      { new: true }
    );
    if (!media) {
      return res.status(404).json({ success: false, message: 'Media not found' });
    }
    res.json({ success: true, media });
  } catch (err) {
    console.error('updateMedia error:', err);
    res.status(500).json({ success: false, message: 'Failed to update media' });
  }
};
