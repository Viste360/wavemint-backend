import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

// POST /auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({
    user: { email, role: "admin" },
    token,
  });
});

export default router;
