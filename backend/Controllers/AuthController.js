const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const user = await User.create({ email, password, username, createdAt });

    const token = createSecretToken(user._id);

   res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
});

    res.status(201).json({
      success: true,
      message: "User signed in successfully",
      user,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports.Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
  res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
});
    res.status(201).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// module.exports.Logout = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email, password });
//     if (email === user.email && password === user.password) {
//       User.deleteOne(user);
//     } else {
//       res.json({ message: "user not find" });
//     }
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

module.exports.Logout = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
     if (!user) {
      return res.json({
        success: false,
        message: "Invalid Email",
      });
    }
    
    // Password check
     const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Wrong Password",
      });
    }

    // Agar sahi hai → logout
    res.clearCookie("token");

    res.json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
