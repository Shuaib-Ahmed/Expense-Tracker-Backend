const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user_email: String,
  expense_name: String,
  expense_total: String,
  expense_date: Date,
  expense_type: String,
  expense_description: String,
});

module.exports = mongoose.model('ExpenseData', ExpenseSchema);