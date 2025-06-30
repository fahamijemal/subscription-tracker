import mongoose from 'mongoose';
import { DB_URL, NODE_ENV } from '../config/env.js';

// Throw an error if DB_URL is not defined
if (!DB_URL) {
  throw new Error('DB_URL is not defined in the environment variables');
}

// Connect to MongoDB using Mongoose
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit app if DB connection fails
  }
};

export default connectToDatabase;
