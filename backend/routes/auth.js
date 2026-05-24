const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login, adminLogin, getMe, logout, googleCallback } = require('../controllers/authController');
const { authenticateJWT, adminAuth } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/admin/login', adminLogin);
router.get('/me', authenticateJWT, getMe);
router.post('/logout', logout);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_URL}/login?error=google_failed` }), googleCallback);

module.exports = router;
