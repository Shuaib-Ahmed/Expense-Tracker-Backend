const express = require("express");
const router = express.Router();

const {
  getAllExpense,
  addExpense,
  getExpenseByYear,
  getExpenseByMonth,
  getExpenseBetweenDates,
  getExpenseById,
  uptadeExpenseById,
  deleteExpense,
} = require("../controllers/expense");

router.route("/:user").get(getAllExpense).post(addExpense);
router.route("/:user/year").get(getExpenseByYear);
router.route("/:user/month").get(getExpenseByMonth);
router.route("/:user/dates").get(getExpenseBetweenDates);
router
  .route("/:user/:id")
  .get(getExpenseById)
  .put(uptadeExpenseById)
  .delete(deleteExpense);

module.exports = router;
