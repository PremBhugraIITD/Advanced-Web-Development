const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization.split(" ")[1]; //The Headers are automatically converted to lowercase.
  try {
    const result = jwt.verify(token, JWT_SECRET);
    console.log(result);
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({
      msg: "User does not exist",
    });
  }
}

module.exports = userMiddleware;
