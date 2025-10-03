const { Admin } = require("../db/index.js");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  //Using the .then() syntax
  Admin.findOne({
    username: username,
    password: password,
  })
    .then((result) => {
      if (result) {
        console.log(result);
        next();
      } else {
        console.log("Admin does not exist");
        res.status(403).json({
          message: "Admin does not exist",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    });
}

module.exports = adminMiddleware;
