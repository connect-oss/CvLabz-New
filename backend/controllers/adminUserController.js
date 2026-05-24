const User = require('../models/User');

// GET /api/v1/admin/users — List all users with search, filter, pagination
const getUsers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search = '',
      role = '',
      userType = '',
      subscriptionStatus = '',
      sort = '-createdAt',
    } = req.query;

    const query = {};

    // Search by name or email
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    // Filter by role
    if (role) {
      query.role = role;
    }

    // Filter by userType (plan)
    if (userType) {
      query.userType = userType;
    }

    // Filter by subscription status
    if (subscriptionStatus) {
      query.subscriptionStatus = subscriptionStatus;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await User.countDocuments(query);
    const users = await User.find(query)
      .select('-password -verificationToken -resetPasswordOTP -resetPasswordOTPExpiresAt -verificationTokenExpiresAt')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    return res.json({
      success: true,
      data: {
        users,
        pagination: {
          total,
          page: parseInt(page),
          limit: parseInt(limit),
          pages: Math.ceil(total / parseInt(limit)),
        },
      },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/v1/admin/users/:id — Get single user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-password -verificationToken -resetPasswordOTP -resetPasswordOTPExpiresAt -verificationTokenExpiresAt')
      .lean();

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, data: user });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/v1/admin/users/:id — Update user
const updateUser = async (req, res) => {
  try {
    const { name, email, role, userType, subscriptionStatus, permissions } = req.body;
    const update = {};

    if (name) update.name = name;
    if (email) update.email = email;
    if (role) update.role = role;
    if (userType) update.userType = userType;
    if (subscriptionStatus) update.subscriptionStatus = subscriptionStatus;
    if (permissions) update.permissions = permissions;

    const user = await User.findByIdAndUpdate(req.params.id, update, { new: true })
      .select('-password -verificationToken -resetPasswordOTP');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, data: user });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/v1/admin/users/:id/suspend — Suspend user
const suspendUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { subscriptionStatus: 'cancelled' },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, data: user, message: 'User suspended' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE /api/v1/admin/users/:id — Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, message: 'User deleted' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/v1/admin/users/stats — User stats
const getUserStats = async (req, res) => {
  try {
    const [total, admins, activeSubscriptions, newThisMonth] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: { $in: ['admin', 'staff'] } }),
      User.countDocuments({ subscriptionStatus: 'active', userType: { $ne: 'basic' } }),
      User.countDocuments({
        createdAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) },
      }),
    ]);

    // Count by userType
    const planCounts = await User.aggregate([
      { $group: { _id: '$userType', count: { $sum: 1 } } },
    ]);

    return res.json({
      success: true,
      data: {
        total,
        admins,
        activeSubscriptions,
        newThisMonth,
        planCounts: planCounts.reduce((acc, item) => {
          acc[item._id || 'basic'] = item.count;
          return acc;
        }, {}),
      },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/v1/admin/users — Create new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, role, userType } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: 'A user with this email already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user',
      userType: userType || 'basic',
      provider: 'local',
      isEmailVerified: true,
    });

    const userData = user.toObject();
    delete userData.password;

    return res.status(201).json({ success: true, data: userData });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getUsers, getUser, updateUser, suspendUser, deleteUser, getUserStats, createUser };
