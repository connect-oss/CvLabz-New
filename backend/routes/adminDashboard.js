const express = require('express');
const router = express.Router();
const { adminAuth, requirePermission } = require('../middlewares/auth');
const { getDashboardStats, getSubscriptionStats } = require('../controllers/adminDashboardController');

router.use(adminAuth);

router.get('/stats', requirePermission('dashboard'), getDashboardStats);
router.get('/subscriptions', requirePermission('subscriptions'), getSubscriptionStats);

module.exports = router;
