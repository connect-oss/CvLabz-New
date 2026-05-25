const mongoose = require('mongoose');

const sectionFieldSchema = new mongoose.Schema({
  key: { type: String, required: true },
  type: { type: String, enum: ['text', 'textarea', 'richtext', 'image', 'video', 'url', 'number', 'array'], default: 'text' },
  label: { type: String },
  value_en: { type: mongoose.Schema.Types.Mixed, default: '' },
  value_nl: { type: mongoose.Schema.Types.Mixed, default: '' },
}, { _id: false });

const sectionSchema = new mongoose.Schema({
  sectionKey: { type: String, required: true },
  sectionLabel: { type: String, required: true },
  sectionType: { type: String, default: 'text' },
  fields: [sectionFieldSchema],
  items: { type: [mongoose.Schema.Types.Mixed], default: [] },
  items_nl: { type: [mongoose.Schema.Types.Mixed], default: [] },
}, { _id: true });

const pageContentSchema = new mongoose.Schema({
  pageKey: { type: String, required: true, unique: true, index: true },
  pageLabel: { type: String, required: true },
  sections: [sectionSchema],
  seo: {
    metaTitle_en: { type: String, default: '' },
    metaTitle_nl: { type: String, default: '' },
    metaDescription_en: { type: String, default: '' },
    metaDescription_nl: { type: String, default: '' },
    metaKeywords_en: { type: String, default: '' },
    metaKeywords_nl: { type: String, default: '' },
    canonical: { type: String, default: '' },
    ogImage: { type: String, default: '' },
  },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('PageContent', pageContentSchema);
