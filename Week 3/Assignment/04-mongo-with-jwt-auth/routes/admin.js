const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  Admin.findOne({
    username: username,
  })
    .then((result) => {
      if (result) {
        console.log("Admin already exists");
        res.status(400).json({
          message: "Admin already exists",
        });
      } else {
        Admin.create({
          username: username,
          password: password,
        })
          .then((result) => {
            console.log(result);
            res.json({
              message: "Admin created successfully",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              message: "Internal Server Error",
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({
    username: username,
    password: password,
  }).then((result) => {
    if (result) {
      console.log(result);
      const token = jwt.sign({ username: username }, JWT_SECRET);
      res.status(200).json({
        token: token,
      });
    } else {
      console.log("Admin does not exist");
      res.status(403).json({
        message: "Admin does not exist",
      });
    }
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  try {
    const result = await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    });
    console.log(result);
    return res.json({
      message: " Course created successfully",
      courseId: result._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const result = await Course.find({});
  console.log(result);
  return res.json({
    courses: result,
  });
});

module.exports = router;
