import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Subscription name is required'],
    minlength: 2,
    trim: true,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: [true, 'Subscription price is required'],
    min: [0, 'Price must be a positive number'],
  },
  currency: {
    type: String,
    enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY'], // Add more as needed
    default: 'USD',
  },
  frequency: {
    type: String,
    enum: ['monthly', 'yearly', 'weekly'], // Add more frequencies if needed
  },
  category: {
    type: String,
    enum: ['entertainment', 'utilities', 'food', 'health', 'education', 'other'],
    required: [true, 'Subscription category is required'],
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'bank_transfer', 'other'],
    required: [true, 'Payment method is required'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'cancelled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: function (value) {
        return value <= new Date(); // Ensure it's not a future date
      },
      message: 'Start date cannot be in the future',
    },
  },
  renewalDate: {
    type: Date,
    required: [true, 'Renewal date is required'],
    validate: {
      validator: function (value) {
        return value >= this.startDate; // Must be after or same as start date
      },
      message: 'Renewal date must be after the start date',
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    index: true,
  },
}, { timestamps: true });

// Auto-calculate renewal date if not set, and mark expired if needed
subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
  }

  // Mark as expired if the renewal date has passed
  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
