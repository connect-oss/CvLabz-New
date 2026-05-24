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
    const user = await User.findById(decoded.id).select('-password -verificationToken -resetPasswordOTP');

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

// Permission-based middleware
// Admin role has ALL permissions regardless of the permissions array
// Staff role must have the specific permission in their permissions array
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Not authenticated' });
    }

    // Admins have all permissions
    if (req.user.role === 'admin') {
      return next();
    }

    // Staff must have specific permission
    if (req.user.role === 'staff' && req.user.permissions && req.user.permissions.includes(permission)) {
      return next();
    }

    return res.status(403).json({
      success: false,
      message: `Access denied. Requires '${permission}' permission.`,
    });
  };
}

module.exports = { authenticateJWT, adminAuth, requirePermission };
