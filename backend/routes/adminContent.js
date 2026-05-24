const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { adminAuth, requirePermission } = require('../middlewares/auth');
const ctrl = require('../controllers/contentController');

// Image upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp|svg/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  cb(null, ext && mime);
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

// Admin routes (require auth + templates permission)
router.use(adminAuth);
router.use(requirePermission('templates'));

router.get('/', ctrl.listPages);
router.get('/:pageKey', ctrl.getPage);
router.put('/:pageKey', ctrl.updatePage);
router.post('/upload', upload.single('image'), ctrl.uploadImage);

module.exports = router;
