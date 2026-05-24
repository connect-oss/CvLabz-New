const express = require('express');
const router = express.Router();
const { adminAuth, requirePermission } = require('../middlewares/auth');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  suspendUser,
  deleteUser,
  getUserStats,
} = require('../controllers/adminUserController');

// All routes require admin auth + 'users' permission
router.use(adminAuth);
router.use(requirePermission('users'));

router.get('/stats', getUserStats);
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.put('/:id/suspend', suspendUser);
router.delete('/:id', deleteUser);

module.exports = router;
