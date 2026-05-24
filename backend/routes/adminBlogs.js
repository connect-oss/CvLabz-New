const express = require('express');
const router = express.Router();
const { adminAuth, requirePermission } = require('../middlewares/auth');
const ctrl = require('../controllers/blogController');

router.use(adminAuth);
router.use(requirePermission('blogs'));

// Blog stats
router.get('/stats', ctrl.getBlogStats);

// Blog CRUD
router.get('/', ctrl.getBlogs);
router.post('/', ctrl.createBlog);
router.get('/:id', ctrl.getBlog);
router.put('/:id', ctrl.updateBlog);
router.delete('/:id', ctrl.deleteBlog);
router.patch('/:id/status', ctrl.toggleStatus);

// Categories
router.get('/categories/all', ctrl.getCategories);
router.post('/categories', ctrl.createCategory);
router.put('/categories/:id', ctrl.updateCategory);
router.delete('/categories/:id', ctrl.deleteCategory);

module.exports = router;
