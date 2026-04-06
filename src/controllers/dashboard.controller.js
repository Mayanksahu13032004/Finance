// src/controllers/dashboard.controller.js
import Record from "../models/record.model.js";

export const summary = async (req, res) => {
  const data = await Record.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  let income = 0, expense = 0;

  data.forEach(d => {
    if (d._id === "income") income = d.total;
    else expense = d.total;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  });
};