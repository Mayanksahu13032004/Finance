import User from "../models/user.model.js";

// Get all users (admin only)
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// Update role
export const updateUserRole = async (req, res) => {
  const { role } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  ).select("-password");

  res.json(user);
};

// Update status (active/inactive)
export const updateUserStatus = async (req, res) => {
  const { status } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  ).select("-password");

  res.json(user);
};