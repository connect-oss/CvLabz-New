const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema({
  linkedin: { type: String, default: '' },
  github: { type: String, default: '' },
  website: { type: String, default: '' },
  twitter: { type: String, default: '' },
  instagram: { type: String, default: '' },
  facebook: { type: String, default: '' },
}, { _id: false });

const personalInfoSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  title: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  location: { type: String, default: '' },
  summary: { type: String, default: '' },
  profileImage: { type: String, default: '' },
  socialLinks: { type: socialLinksSchema, default: {} },
}, { _id: false });

const experienceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  company: { type: String, default: '' },
  position: { type: String, default: '' },
  startDate: { type: String, default: '' },
  endDate: { type: String, default: '' },
  currentlyWorking: { type: Boolean, default: false },
  description: { type: String, default: '' },
  location: { type: String, default: '' },
}, { _id: false });

const educationSchema = new mongoose.Schema({
  id: { type: String, required: true },
  institution: { type: String, default: '' },
  degree: { type: String, default: '' },
  startDate: { type: String, default: '' },
  endDate: { type: String, default: '' },
  description: { type: String, default: '' },
  location: { type: String, default: '' },
}, { _id: false });

const skillSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, default: '' },
  level: { type: Number, min: 1, max: 5, default: 3 },
}, { _id: false });

const languageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, default: '' },
  proficiency: {
    type: String,
    enum: ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Native'],
    default: 'Intermediate',
  },
}, { _id: false });

const recommendationSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, default: '' },
  position: { type: String, default: '' },
  company: { type: String, default: '' },
  text: { type: String, default: '' },
}, { _id: false });

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  technologies: { type: String, default: '' },
  link: { type: String, default: '' },
  year: { type: String, default: '' },
}, { _id: false });

const hobbySchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, default: '' },
}, { _id: false });

const cvSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  title: { type: String, required: true, default: 'My CV' },
  template: { type: String, default: 'astraModern' },
  template_variant_key: { type: String, default: '', index: true },
  layout_key: { type: String, default: '', index: true },
  template_snapshot: { type: mongoose.Schema.Types.Mixed, default: null },
  theme: { type: mongoose.Schema.Types.Mixed, default: null },
  pageBreakHints: { type: mongoose.Schema.Types.Mixed, default: null },
  personalInfo: { type: personalInfoSchema, default: {} },
  experience: [experienceSchema],
  education: [educationSchema],
  skills: [skillSchema],
  languages: [languageSchema],
  recommendations: [recommendationSchema],
  projects: [projectSchema],
  hobbies: [hobbySchema],
  isComplete: { type: Boolean, default: false },
  lastSaved: { type: Date, default: Date.now },
  version: { type: Number, default: 1 },
  isPublic: { type: Boolean, default: false, index: true },
  publicViewCount: { type: Number, default: 0 },
  madePublicAt: { type: Date, default: null },
}, { timestamps: true });

cvSchema.index({ userId: 1, lastSaved: -1 });
cvSchema.index({ userId: 1, isComplete: 1 });
cvSchema.index({ userId: 1, template_variant_key: 1 });

cvSchema.pre('validate', function (next) {
  if (!this.template_variant_key && this.template) {
    this.template_variant_key = this.template;
  }
  next();
});

cvSchema.pre('save', function (next) {
  this.lastSaved = new Date();
  next();
});

module.exports = mongoose.model('CV', cvSchema);
