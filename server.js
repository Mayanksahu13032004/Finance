import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

// OPTIONAL (for admin seeding)
import User from "./src/models/user.model.js";
import bcrypt from "bcryptjs";

dotenv.config();

// Connect DB
connectDB();

// 🔥 Create default admin (optional but recommended)
const createAdmin = async () => {
  try {
    const exists = await User.findOne({ email: "admin@gmail.com" });

    if (!exists) {
      const hash = await bcrypt.hash("123456", 10);

      await User.create({
        name: "Admin",
        email: "admin@gmail.com",
        password: hash,
        role: "admin"
      });

      console.log("Default admin created");
    }
  } catch (err) {
    console.log(err.message);
  }
};

createAdmin();

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", process.env.PORT);
});