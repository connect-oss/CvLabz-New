const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.log('Admin seeder: ADMIN_EMAIL or ADMIN_PASSWORD not set, skipping');
    return;
  }

  const existing = await User.findOne({ email });
  if (existing) {
    // Always ensure admin has correct role, password, and permissions
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    existing.role = 'admin';
    existing.password = hashedPassword;
    existing.provider = 'local';
    existing.isEmailVerified = true;
    existing.permissions = ["dashboard","users","templates","analytics","subscriptions","videos","blogs","referrals","financial","salary_config","settings","logs","languages"];

    // Save without triggering the password pre-save hook (already hashed)
    await User.updateOne({ _id: existing._id }, {
      role: existing.role,
      password: hashedPassword,
      provider: existing.provider,
      isEmailVerified: existing.isEmailVerified,
      permissions: existing.permissions,
    });
    console.log(`Admin seeder: Updated ${email} — role, password, and permissions set`);
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
