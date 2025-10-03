import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send(`${parseFloat(req.query.a || 0) + parseFloat(req.query.b || 0)}`);
});

app.use((err, req, res, next) => {
  res.status(500).send("Some error occurred");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
