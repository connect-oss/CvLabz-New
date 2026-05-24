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

module.exports = { register, login, adminLogin, getMe, logout, googleCallback };
