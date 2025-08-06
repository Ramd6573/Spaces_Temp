import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  phone: { type: String },
  role: {
    type: String,
    enum: ['admin', 'host', 'client'],
    default: 'client'
  },
  savedSpaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Space' }]
}, { timestamps: true });

export const usersModel = mongoose.model('User', userSchema);