const { User } = require("../db/index.js");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  //Using the async/await syntax
  try {
    const result = await User.findOne({
      username: username,
      password: password,
    });
    if (result) {
      console.log(result);
      next();
    } else {
      console.log("User does not exist");
      res.status(403).json({
        message: "User does not exist",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = userMiddleware;
