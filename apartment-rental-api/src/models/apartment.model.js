import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
  name: String,

  description: String,

  floor_area_size: String,

  price_per_month: String,

  location: String,

  photo: {
    data: Buffer,
    contentType: String,
  },

  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,

  realtor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  available: {
    type: Boolean,
    enum: [true, false],
    default: true,
  },
});

export const Apartment = mongoose.model('Apartment', apartmentSchema);
