import { Schema, model } from 'mongoose';

const schema = new Schema({
  tierName: { type: String, default: '' },
  price: { type: Number, default: 0 },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model('tiers', schema);
