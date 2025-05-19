const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const user = { id: 1, username: "admin" };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
