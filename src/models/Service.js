import { Schema, model } from 'mongoose';

const schema = new Schema({
  serviceName: { type: String, default: '' },
  slug: { type: String, default: '' },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model('services', schema);
