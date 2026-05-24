const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

function generateReferralCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateSlugFromName(name) {
  if (!name) return '';
  return name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').substring(0, 40);
}

function generateRandomSuffix() {
  return Math.random().toString(36).substring(2, 6);
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  password: { type: String },
  isEmailVerified: { type: Boolean, default: false },
  provider: { type: String, enum: ["local", "google", "facebook"], default: "local" },
  googleId: { type: String, index: true },
  facebookId: { type: String, index: true },
  verificationToken: { type: String },
  verificationTokenExpiresAt: { type: Date },
  resetPasswordOTP: { type: String },
  resetPasswordOTPExpiresAt: { type: Date },
  role: { type: String, enum: ["user", "admin", "staff"], default: "user" },
  profilePhoto: { url: { type: String, default: null }, publicId: { type: String, default: null } },
  permissions: { type: [String], default: [], enum: ["dashboard","users","templates","analytics","subscriptions","videos","blogs","referrals","financial","salary_config","settings","logs","languages"] },
  userType: { type: String, default: "basic" },
  subscriptionStatus: { type: String, enum: ["active", "cancelled", "expired"], default: "active" },
  subscriptionStartDate: { type: Date },
  subscriptionEndDate: { type: Date },
  stripeCustomerId: { type: String },
  stripeSubscriptionId: { type: String },
  mollieCustomerId: { type: String },
  mollieSubscriptionId: { type: String },
  molliePendingPaymentId: { type: String },
  molliePendingPlan: { type: String },
  aiPremiumSource: { type: String, enum: ["paid", "trustpilot_review", null], default: null },
  trustpilotReviewId: { type: mongoose.Schema.Types.ObjectId, ref: "TrustpilotReview" },
  previousUserType: { type: String, default: null },
  lastPlanChangeDate: { type: Date },
  cancellationReason: { type: String, enum: ["too_expensive","not_using_enough","missing_features","found_alternative","technical_issues","poor_support","temporary_pause","other"], default: null },
  cancellationFeedback: { type: String },
  cancelledAt: { type: Date },
  pendingDowngrade: { toPlan: { type: String, default: null }, effectiveDate: { type: Date, default: null }, requestedAt: { type: Date, default: null } },
  isReferred: { type: Boolean, default: false },
  referralCode: { type: String, unique: true, index: true },
  publicSlug: { type: String, unique: true, sparse: true, lowercase: true, trim: true, maxlength: 50, match: [/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, 'Slug can only contain lowercase letters, numbers, and hyphens'], index: true },
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) { next(err); }
});

UserSchema.methods.comparePassword = async function (candidate) {
  if (!this.password) return false;
  return bcrypt.compare(candidate, this.password);
};

UserSchema.pre("save", async function (next) {
  if (this.referralCode) return next();
  let code, exists = true;
  while (exists) {
    code = generateReferralCode();
    exists = await mongoose.models.User.exists({ referralCode: code });
  }
  this.referralCode = code;
  next();
});

UserSchema.pre("save", async function (next) {
  if (this.publicSlug) return next();
  const baseSlug = generateSlugFromName(this.name);
  if (!baseSlug) return next();
  let slug = baseSlug, exists = true, attempts = 0;
  while (exists && attempts < 10) {
    exists = await mongoose.models.User.exists({ publicSlug: slug });
    if (exists) slug = `${baseSlug}-${generateRandomSuffix()}`;
    attempts++;
  }
  this.publicSlug = slug;
  next();
});

module.exports = mongoose.model("User", UserSchema);
