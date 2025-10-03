const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");
console.log(JWT_SECRET);

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization.split(" ")[1]; //The Headers are automatically converted to lowercase.
  try {
    const result = jwt.verify(token, JWT_SECRET);
    console.log(result);
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({
      msg: "Admin does not exist",
    });
  }
}

module.exports = adminMiddleware;
