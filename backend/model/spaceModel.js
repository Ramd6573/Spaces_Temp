import mongoose from 'mongoose';

const spaceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  contact: {
    email: String,
    phone: String,
  },
  type: {
    type: String,
    enum: ['coworking', 'private_cabin', 'studio', 'event_space'],
    required: true,
  },
  amenities: [{
    type: String,
    enum: ['wifi', 'ac', 'parking', 'pantry', 'projector', 'whiteboard']
  }],
  capacity: { type: Number, required: true },
  pricePerSeat: {
    perHour: Number,
    perDay: Number,
    perMonth: Number,
  },
  images: [String], // Cloudinary or S3 URLs
  geo: {
    lat: Number,
    lng: Number
  },
  availableDays: [String], // ['Monday', 'Tuesday', ...]
  availableTimes: {
    start: String, // e.g. '09:00'
    end: String    // e.g. '18:00'
  },
  availability: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Availability' }],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const spaceModel = mongoose.model('Space', spaceSchema);