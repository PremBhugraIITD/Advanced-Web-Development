import express from "express";
import zod from "zod";

const app = express();
const port = 3001;

let requestCount = 0;

const numberOfRequests = (req, res, next) => {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  next();
};

app.use(express.json());

const schema = zod.string();

console.log(schema.safeParse("hello"));
console.log(schema.safeParse(9));

app.get("/test", numberOfRequests, (req, res) => {
  const testObject = req.body.kismat;
  const response = schema.safeParse(testObject);
  console.log(response);
  if (!response.success) {
    res.status(400).send(response.error);
  } else {
    res.send("Health checkup is done. You are healthy.");
  }
});

app.use((err, req, res, next) => {
  console.log("There was an error");
  res.status(500).send("Sorry, there was an error");
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
