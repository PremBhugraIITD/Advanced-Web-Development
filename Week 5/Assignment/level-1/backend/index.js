import express from "express";
import { cards } from "./db.js";
import newCard from "./types.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/cards", async (req, res) => {
  const response = await cards.find({});
  return res.json({
    message: response,
  });
});

app.post("/cards", async (req, res) => {
  const payLoad = req.body;
  const result = newCard.safeParse(payLoad);
  if (result.success) {
    cards.create(payLoad).then(() => {
      return res.json({
        message: "Entry added successfully",
      });
    });
  } else {
    return res.status(400).json({
      message: "Invalid Input",
      issue: result.error,
    });
  }
});

app.get("/cards/:id", (req, res) => {
  cards.findById(req.params.id).then((response) => {
    return res.json({
      message: response,
    });
  });
});

app.put("/cards/:id", async (req, res) => {
  const payLoad = req.body;
  await cards.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: payLoad,
    }
  );
  return res.json({
    message: "Entry updated successfully",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "An unexpected error occurred",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
