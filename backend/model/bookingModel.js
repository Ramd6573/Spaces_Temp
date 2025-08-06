import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  space: { type: mongoose.Schema.Types.ObjectId, ref: 'Space', required: true },
  slotType: { type: String, enum: ['hour', 'day', 'month'], required: true },
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' }
}, { timestamps: true });

export const bookingModel = mongoose.model('Booking', bookingSchema);