const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const { User, Course } = require("../db/index.js");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({
    username: username,
  })
    .then((result) => {
      if (result) {
        console.log("User already exists");
        res.status(400).json({
          message: "User already exists",
        });
      } else {
        User.create({
          username: username,
          password: password,
        })
          .then((result) => {
            console.log(result);
            res.json({
              message: "User created successfully",
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const result = await Course.find({});
  console.log(result);
  return res.json({
    courses: result,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const id = req.params.courseId;
  try {
    const result = await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: id,
        },
      }
    );
    console.log(result);
    res.json({
      message: "Course purchased successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  User.findOne({
    username: username,
  })
    .then((result) => {
      return Course.find({
        _id: {
          $in: result.purchasedCourses, //Only those course will be shown whose id is present in the purchasedCourses array of the user
        },
      });
    })
    .then((result) => {
      res.json({
        courses: result,
      });
    });
});

module.exports = router;
