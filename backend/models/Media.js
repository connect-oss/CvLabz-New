const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, enum: ['image', 'video', 'document'], required: true, index: true },
  url: { type: String, required: true },
  alt: { type: String, default: '' },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

mediaSchema.index({ type: 1, createdAt: -1 });
mediaSchema.index({ originalName: 'text' });

module.exports = mongoose.model('Media', mediaSchema);
