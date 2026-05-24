const User = require('../models/User');
const { verifyAuthToken } = require('../utils/jwt');

async function authenticateJWT(req, res, next) {
  try {
    let token = req.cookies?.token;

    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authenticated' });
    }

    const decoded = verifyAuthToken(token);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}

async function adminAuth(req, res, next) {
  authenticateJWT(req, res, () => {
    if (!req.user || !['admin', 'staff'].includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Access denied. Admin or staff only.' });
    }
    next();
  });
}

module.exports = { authenticateJWT, adminAuth };
