const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");

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

router.post("/signin", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
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
      console.log("User does not exist");
      res.status(403).json({
        message: "User does not exist",
      });
    }
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
  const username = jwt.verify(req.headers.authorization.split(" ")[1], JWT_SECRET).username;
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
  const username = jwt.verify(req.headers.authorization.split(" ")[1], JWT_SECRET).username;
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
