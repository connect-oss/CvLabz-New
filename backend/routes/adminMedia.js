const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { adminAuth } = require('../middlewares/auth');
const ctrl = require('../controllers/mediaController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimes = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml',
    'video/mp4', 'video/webm', 'video/quicktime',
    'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  cb(null, allowedMimes.includes(file.mimetype));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 50 * 1024 * 1024 } });

router.use(adminAuth);

router.get('/', ctrl.listMedia);
router.post('/upload', upload.single('file'), ctrl.uploadMedia);
router.post('/upload-multiple', upload.array('files', 10), ctrl.uploadMultiple);
router.get('/:id', ctrl.getMedia);
router.put('/:id', ctrl.updateMedia);
router.delete('/:id', ctrl.deleteMedia);

module.exports = router;
