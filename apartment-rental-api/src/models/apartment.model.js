import mongoose from 'mongoose';
// import { geocoder } from '../utils/geocoder';

const apartmentSchema = new mongoose.Schema({
  name: String,

  description: String,

  floor_size: String,

  price_per_month: String,

  room: Number,

  // address: {
  //   type: String,
  //   required: [true, 'Please add an address'],
  // },
  //
  // location: {
  //   type: {
  //     type: String,
  //     enum: ['Point'],
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: '2dsphere',
  //   },
  //   formattedAddress: String,
  // },

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

// apartmentSchema.pre('save', async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   console.log(loc);
// });

export const Apartment = mongoose.model('Apartment', apartmentSchema);
