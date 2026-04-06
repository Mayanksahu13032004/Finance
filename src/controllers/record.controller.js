// src/controllers/record.controller.js
import Record from "../models/record.model.js";

export const getRecords = async (req, res) => {
  const { page = 1, limit = 5, type, category } = req.query;

  const filter = {};
  if (type) filter.type = type;
  if (category) filter.category = category;

  const records = await Record.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(records);
};

export const createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    createdBy: req.user.id
  });

  res.status(201).json(record);
};