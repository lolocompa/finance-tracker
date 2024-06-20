const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Checking', 'Savings', 'Credit Card', 'Investment'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
