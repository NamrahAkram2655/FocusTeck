const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// For demo: Hardcoded user — replace with real DB user validation!
const users = [{ id: 1, email: "test@example.com", password: "password123" }];

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Validate user credentials (in real apps, query your DB)
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Create JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
