const jwt = require("jsonwebtoken");
const User = require("../models/User");

export const authmiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token Not Available" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(401).json({
        message: "User Not Found",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
