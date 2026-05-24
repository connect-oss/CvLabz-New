const User = require('../models/User');

const getDashboardStats = async (req, res) => {
  try {
    // Total users
    const totalUsers = await User.countDocuments();

    // Active subscriptions (userType not 'basic')
    const activeSubscriptions = await User.countDocuments({ userType: { $ne: 'basic' }, subscriptionStatus: 'active' });

    // New signups this month
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const newSignups = await User.countDocuments({ createdAt: { $gte: startOfMonth } });

    // Monthly revenue estimate
    const premiumCount = await User.countDocuments({ userType: 'premium', subscriptionStatus: 'active' });
    const proCount = await User.countDocuments({ userType: 'pro', subscriptionStatus: 'active' });
    const monthlyRevenue = (premiumCount * 19.99) + (proCount * 9.99);

    // Users by plan
    const planCounts = await User.aggregate([
      { $group: { _id: '$userType', count: { $sum: 1 } } }
    ]);

    // Recent signups (last 10)
    const recentSignups = await User.find()
      .select('name email userType createdAt')
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    // Recent activity (last 10 users who logged in or were modified)
    const recentActivity = await User.find()
      .select('name email updatedAt userType')
      .sort({ updatedAt: -1 })
      .limit(10)
      .lean();

    return res.json({
      success: true,
      data: {
        totalUsers,
        activeSubscriptions,
        newSignups,
        monthlyRevenue: Math.round(monthlyRevenue * 100) / 100,
        planCounts: planCounts.reduce((acc, item) => { acc[item._id || 'basic'] = item.count; return acc; }, {}),
        recentSignups,
        recentActivity,
      }
    });
  } catch (error) {
    console.error('getDashboardStats error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch dashboard stats' });
  }
};

const getSubscriptionStats = async (req, res) => {
  try {
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

    const premiumCount = await User.countDocuments({ userType: 'premium', subscriptionStatus: 'active' });
    const proCount = await User.countDocuments({ userType: 'pro', subscriptionStatus: 'active' });

    const totalActive = await User.countDocuments({ subscriptionStatus: 'active', userType: { $ne: 'basic' } });
    const mrr = (premiumCount * 19.99) + (proCount * 9.99);
    const churnedThisMonth = await User.countDocuments({
      subscriptionStatus: 'cancelled',
      cancelledAt: { $gte: startOfMonth }
    });
    const totalPaid = totalActive + churnedThisMonth;
    const churnRate = totalPaid > 0 ? Math.round((churnedThisMonth / totalPaid) * 100 * 10) / 10 : 0;
    const arpu = totalActive > 0 ? Math.round((mrr / totalActive) * 100) / 100 : 0;

    // Plan breakdown
    const freePlan = await User.countDocuments({ userType: 'basic' });
    const proPlan = proCount;
    const premiumPlan = premiumCount;

    // Recent transactions (from users with subscription dates)
    const recentTransactions = await User.find({ userType: { $ne: 'basic' } })
      .select('name email userType subscriptionStatus subscriptionStartDate')
      .sort({ subscriptionStartDate: -1 })
      .limit(10)
      .lean();

    return res.json({
      success: true,
      data: {
        totalActive,
        mrr: Math.round(mrr * 100) / 100,
        churnRate,
        arpu,
        freePlan,
        proPlan,
        premiumPlan,
        recentTransactions,
      }
    });
  } catch (error) {
    console.error('getSubscriptionStats error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch subscription stats' });
  }
};

module.exports = { getDashboardStats, getSubscriptionStats };
