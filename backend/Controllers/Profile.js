const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.profile = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(
      token,
      process.env.TOKEN_KEY
    );

    const user = await User.findById(decoded.id)
      .select("username email");

    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};