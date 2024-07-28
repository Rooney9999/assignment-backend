const Expense = require('../models/Expense');
const ExpenseParticipant = require('../models/ExpenseParticipant');

exports.addExpense = async (req, res) => {
  const { description, totalAmount, date, participants } = req.body;

  try {
    const newExpense = new Expense({ description, totalAmount, date });
    await newExpense.save();

    participants.forEach(async participant => {
      const newExpenseParticipant = new ExpenseParticipant({
        expense: newExpense._id,
        user: participant.user,
        amountOwed: participant.amountOwed,
        percentageOwed: participant.percentageOwed,
      });
      await newExpenseParticipant.save();
    });

    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseParticipant.find({ user: req.params.userId })
      .populate('expense')
      .populate('user');
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    console.log("expensesn", expenses)
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.downloadBalanceSheet = async (req, res) => {
  // Implementation for downloading balance sheet
};
