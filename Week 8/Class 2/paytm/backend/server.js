import express from "express";
import rootRouter from "./routes/root.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
//all th requests starting with /api/v1 will be handled by rootRouter

app.use((err, req, res, next) => {
  console.log("Error handling middleware called: ", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
