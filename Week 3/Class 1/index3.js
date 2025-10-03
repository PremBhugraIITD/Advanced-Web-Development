import express from "express";
import zod from "zod";

const app = express();
const port = 3000;

let requestCount = 0;

const numberOfRequests = (req, res, next) => {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  next();
};

const schema = zod.object({
  username: zod.string(),
  password: zod.number(),
});

app.use(express.json());

app.get("/login", numberOfRequests, (req, res) => {
  const response = schema.safeParse(req.body);
  console.log(response);
  if (response.success) {
    res.send("Login successful");
  } else {
    res.send(response.error);
  }
});

app.use((err, req, res, next) => {
  console.log("There was an error");
  res.status(500).send("Sorry, there was an error"); //This wil be shown to the user when he send some errorneous body which is bound to throw an error. For example: username is sent as 'prem' (literally characters as it is without "") instead of '"prem"' (string).
  //Zod is triggered when the body does not throw an error but still does not match our format.
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
