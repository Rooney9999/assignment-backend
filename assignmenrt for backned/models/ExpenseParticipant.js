const mongoose = require('mongoose');

const expenseParticipantSchema = new mongoose.Schema({
  expense: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amountOwed: { type: Number, required: true },
  percentageOwed: { type: Number },
});

module.exports = mongoose.model('ExpenseParticipant', expenseParticipantSchema);
