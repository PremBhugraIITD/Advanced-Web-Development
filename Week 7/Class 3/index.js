import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    net: 10,
    job: 20,
    mes: 30,
    not: 40,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
