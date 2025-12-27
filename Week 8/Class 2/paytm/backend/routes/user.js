import express from "express";
import zod from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import { Account, User } from "../db.js";
import { authMiddleware } from "../middleware.js";

const router = express.Router();

const signupBody = zod.object({
  username: zod.string(),
  firstname: zod.string(),
  lastname: zod.string().optional(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  } else {
    const existingUser = await User.findOne({
      username: req.body.username,
    });
    if (existingUser) {
      return res.status(411).json({
        message: "User already exists",
      });
    } else {
      const newUser = await User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
      });
      const token = jwt.sign(
        {
          userId: newUser._id,
        },
        JWT_SECRET
      );
      await Account.create({
        userId: newUser._id,
        balance: 1 + 10000 * Math.random(),
      });
      return res.status(200).json({
        message: "User created successfully",
        token: token,
      });
    }
  }
});

const signinBody = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  } else {
    const existingUser = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!existingUser) {
      return res.status(411).json({
        message: "Authentication Failed",
      });
    } else {
      const token = jwt.sign(
        {
          userId: existingUser._id,
        },
        JWT_SECRET
      );
      return res.status(200).json({
        message: "Authentication Successful",
        token: token,
      });
    }
  }
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  } else {
    const userId = req.userId;
    await User.findByIdAndUpdate(userId, req.body);
    return res.status(200).json({
      message: "Updated Successfully",
    });
  }
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });

  res.status(200).json({
    users: users.map((user) => {
      return {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id,
      };
    }),
  });
});

export default router;
