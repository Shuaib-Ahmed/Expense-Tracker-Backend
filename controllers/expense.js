const ExpenseModal = require("../models/Expense");

const getAllExpense = async (req, res) => {
  const { user } = req.params;
  try {
    const response = await ExpenseModal.find({ user_email: user });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }
};

const addExpense = async (req, res) => {
  const { user } = req.params;
  const { expenseDetails } = req.body;
  try {
    const response = await ExpenseModal.create({
      user_email: user,
      ...expenseDetails,
    });
    res.status(201).json(response);
  } catch (err) {
    res
      .status(409)
      .json({ error: true, message: "Something went wrong please try again" });
  }
};

const getExpenseByYear = async (req, res) => {
  const { year } = req.query;
  const { user } = req.params;

  try {
    const response = await ExpenseModal.find({
      user_email: user,
      expense_date: { $gte: `${year}-01-01`, $lte: `${year}-12-31` },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }
};

const getExpenseByMonth = async (req, res) => {
  const { year, month } = req.query;
  const { user } = req.params;

  try {
    const response = await ExpenseModal.find({
      user_email: user,
      expense_date: {
        $gte: `${year}-${month}-01`,
        $lte: `${year}-${month}-31`,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }
};

const getExpenseBetweenDates = async (req, res) => {
  const { user } = req.params;
  const { start_date, end_date } = req.query;

  try {
    const response = await ExpenseModal.find({
      user_email: user,
      expense_date: {
        $gte: start_date,
        $lte: end_date,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }

  res.status(200).json({});
};

const getExpenseById = async (req, res) => {
  const { user, id } = req.params;
  try {
    const response = await ExpenseModal.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }
};

const uptadeExpenseById = async (req, res) => {
  const { user, id } = req.params;
  const { expenseDetails } = req.body;
  try {
    const response = await ExpenseModal.findByIdAndUpdate(id, {
      user_email: user,
      ...expenseDetails,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }
};

const deleteExpense = async (req, res) => {
  const { user, id } = req.params;
  try {
    const response = await ExpenseModal.findByIdAndRemove(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).status({
      error: true,
      message: "Something went wrong please try again",
    });
  }
  res.send(user, id);
};

module.exports = {
  getAllExpense,
  addExpense,
  getExpenseByYear,
  getExpenseByMonth,
  getExpenseBetweenDates,
  getExpenseById,
  uptadeExpenseById,
  deleteExpense,
};
