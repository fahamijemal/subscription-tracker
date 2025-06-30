import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Please provide a valid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    minlength: 6,
  }
}, { timestamps: true });

// Create User model
const User = mongoose.model('User', userSchema);
export default User;
