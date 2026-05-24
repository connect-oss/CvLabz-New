const User = require('../models/User');

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.log('Admin seeder: ADMIN_EMAIL or ADMIN_PASSWORD not set, skipping');
    return;
  }

  const existing = await User.findOne({ email });
  if (existing) {
    // Update to admin if not already
    if (existing.role !== 'admin') {
      existing.role = 'admin';
      existing.permissions = ["dashboard","users","templates","analytics","subscriptions","videos","blogs","referrals","financial","salary_config","settings","logs","languages"];
      await existing.save();
      console.log(`Admin seeder: Updated ${email} to admin role`);
    } else {
      console.log(`Admin seeder: Admin ${email} already exists`);
    }
    return;
  }

  await User.create({
    name: 'Admin',
    email,
    password,
    role: 'admin',
    isEmailVerified: true,
    provider: 'local',
    permissions: ["dashboard","users","templates","analytics","subscriptions","videos","blogs","referrals","financial","salary_config","settings","logs","languages"],
  });
  console.log(`Admin seeder: Created admin user ${email}`);
}

module.exports = seedAdmin;
