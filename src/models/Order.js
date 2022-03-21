import { Schema, model } from 'mongoose';

const schema = new Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  country: { type: String, default: '' },
  state: { type: String, default: '' },
  zip: { type: String, default: '' },
  service: { type: Schema.Types.ObjectId, ref: 'services' },
  tier: { type: Schema.Types.ObjectId, ref: 'tiers' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model('orders', schema);
