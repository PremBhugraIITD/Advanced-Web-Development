import express from "express";
import zod from "zod";
import { authMiddleware } from "../middleware.js";
import { Account } from "../db.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  res.status(200).json({
    balance: account.balance,
  });
});

const transferBody = zod.object({
  to: zod.string(),
  amount: zod.number().min(1),
});
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  const { success } = transferBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  }
  session.startTransaction();
  const { to, amount } = req.body;
  const from = req.userId;
  try {
    const fromAccount = await Account.findOne({ userId: from }).session(
      session
    );
    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount || !fromAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Invalid accounts",
      });
    } else if (fromAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient balance",
      });
    } else {
      // Performing the transaction
      await Account.updateOne(
        { userId: from },
        { $inc: { balance: -amount } }
      ).session(session);
      await Account.updateOne(
        { userId: to },
        { $inc: { balance: amount } }
      ).session(session);
      await session.commitTransaction();
      res.status(200).json({
        message: "Transfer successful",
      });
    }
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({
      message: "Transaction failed",
    });
  } finally {
    session.endSession();
  }
});

export default router;
