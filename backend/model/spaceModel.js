import mongoose from 'mongoose';

const typeOfSpacesSchema = new mongoose.Schema({
  floor:{
    type: String,
    required: true,
  },
  roomNumber:{
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  amenities: [{
    type: String,
    required: true
  }],
  capacity: { type: Number, required: true },
  pricePerSeat: {
    perHour: Number,
    perDay: Number,
    perWeek: Number,
    perMonth: Number,
    perThreeMonths: Number,
    perSixMonths: Number,
    perOneYear: Number
  },
  discountPercentage:{
    perHour: Number,
    perDay: Number,
    perWeek: Number,
    perMonth: Number,
    perThreeMonths: Number,
    perSixMonths: Number,
    perOneYear: Number
  },
  images: [String], // Cloudinary or S3 URLs
  availableDays: [String], // ['Monday', 'Tuesday', ...]
  availableTimes: {
    start: String, // e.g. '09:00'
    end: String    // e.g. '18:00'
  },
  availability: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Availability' }],
  isActive: { type: Boolean, default: true }
})

const spaceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  geo: {
    lat: Number,
    lng: Number
  },
  contact: {
    email: String,
    phone: String,
  },
  space:{
    type: [typeOfSpacesSchema],
    require: true
  }
}, { timestamps: true });

export const spaceModel = mongoose.model('Space', spaceSchema);