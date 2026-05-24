const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  // English content (required)
  title: { type: String, required: true, trim: true, maxlength: 200 },
  slug: { type: String, unique: true, sparse: true, lowercase: true, trim: true },
  summary: { type: String, required: true, trim: true, maxlength: 500 },
  content: { type: String, required: true },

  // Dutch content (optional)
  title_nl: { type: String, trim: true, maxlength: 200, default: '' },
  summary_nl: { type: String, trim: true, maxlength: 500, default: '' },
  content_nl: { type: String, default: '' },

  // Featured Image (URL-based, no Cloudinary)
  featuredImage: {
    url: { type: String },
    altText: { type: String, default: '' }
  },

  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft', index: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogCategory' },
  tags: [{ type: String, trim: true, lowercase: true }],

  seo: {
    metaTitle: { type: String, maxlength: 70 },
    metaDescription: { type: String, maxlength: 160 },
    metaKeywords: [{ type: String }],
  },

  viewCount: { type: Number, default: 0 },
  publishedAt: { type: Date },
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
  readingTime: { type: Number, default: 5 }
}, { timestamps: true });

// Pre-save: auto-slug, reading time, SEO defaults
blogSchema.pre('save', function(next) {
  if (this.isModified('title') && (!this.slug || this.slug.trim() === '')) {
    this.slug = this.title.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')
      .replace(/-+/g, '-').replace(/^-|-$/g, '');
  }
  if (this.isModified('content')) {
    const wordCount = this.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    this.readingTime = Math.max(1, Math.ceil(wordCount / 200));
  }
  if (!this.seo) this.seo = {};
  if (!this.seo.metaTitle) this.seo.metaTitle = this.title.substring(0, 70);
  if (!this.seo.metaDescription) this.seo.metaDescription = this.summary.substring(0, 160);
  next();
});

blogSchema.index({ title: 'text', summary: 'text' });
blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ category: 1, status: 1 });
blogSchema.index({ tags: 1 });

module.exports = mongoose.model('Blog', blogSchema);
