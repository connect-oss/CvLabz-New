const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
  // English (required)
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String, maxlength: 200 },

  // Dutch (optional)
  name_nl: { type: String, trim: true, default: '' },
  description_nl: { type: String, maxlength: 200, default: '' },

  slug: { type: String, unique: true, lowercase: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

blogCategorySchema.pre('save', function(next) {
  if (this.isModified('name') && !this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  next();
});

module.exports = mongoose.model('BlogCategory', blogCategorySchema);
