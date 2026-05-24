const crypto = require('crypto');
const User = require('../models/User');
const { signAuthToken } = require('../utils/jwt');
const { setAuthCookie, clearAuthCookie } = require('../utils/cookies');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'User already exists' });
    }

    const user = await User.create({ name, email, password, provider: 'local' });

    // Generate email verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    user.verificationToken = verificationToken;
    user.verificationTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    await user.save();

    console.log(`Verification link: ${process.env.FRONTEND_URL}/api/v1/auth/verify-email?token=${verificationToken}`);

    const token = signAuthToken({ id: user._id });
    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (user.provider === 'google' && !user.password) {
      return res.status(400).json({ success: false, message: 'Please login with Google' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = signAuthToken({ id: user._id });
    setAuthCookie(res, token);

    return res.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (!['admin', 'staff'].includes(user.role)) {
      return res.status(403).json({ success: false, message: 'Access denied. Admin or staff only.' });
    }

    if (user.provider === 'google' && !user.password) {
      return res.status(400).json({ success: false, message: 'Please login with Google' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = signAuthToken({ id: user._id });
    setAuthCookie(res, token);

    return res.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getMe = async (req, res) => {
  try {
    return res.json({ success: true, user: req.user });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const logout = async (req, res) => {
  try {
    clearAuthCookie(res);
    return res.json({ success: true, message: 'Logged out' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const googleCallback = async (req, res) => {
  try {
    const token = signAuthToken({ id: req.user._id });
    setAuthCookie(res, token);
    return res.redirect(`${process.env.FRONTEND_URL}/login?success=true`);
  } catch (err) {
    return res.redirect(`${process.env.FRONTEND_URL}/login?error=server_error`);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      user.resetPasswordOTP = otp;
      user.resetPasswordOTPExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
      await user.save();

      console.log(`Password reset OTP for ${email}:`, otp);
    }

    return res.json({ success: true, message: 'If an account exists, a reset code has been sent' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired reset code' });
    }

    if (!user.resetPasswordOTP || user.resetPasswordOTP !== otp) {
      return res.status(400).json({ success: false, message: 'Invalid or expired reset code' });
    }

    if (!user.resetPasswordOTPExpiresAt || user.resetPasswordOTPExpiresAt < Date.now()) {
      return res.status(400).json({ success: false, message: 'Invalid or expired reset code' });
    }

    user.password = newPassword;
    user.resetPasswordOTP = undefined;
    user.resetPasswordOTPExpiresAt = undefined;
    await user.save();

    return res.json({ success: true, message: 'Password reset successfully' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.redirect(`${process.env.FRONTEND_URL}/login?error=invalid_token`);
    }

    user.isEmailVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    return res.redirect(`${process.env.FRONTEND_URL}/login?verified=true`);
  } catch (err) {
    return res.redirect(`${process.env.FRONTEND_URL}/login?error=server_error`);
  }
};

module.exports = { register, login, adminLogin, getMe, logout, googleCallback, forgotPassword, resetPassword, verifyEmail };
