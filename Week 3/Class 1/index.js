import express from "express";

const app = express();
const port = 3000;

const userMiddleWare = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "prem" || password != "password") {
    res.status(403).send("Incorrect username or password");
  } else {
    next();
  }
};

const kidneyMiddleware = (req, res, next) => {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).send("Incorrect kidney id");
  } else {
    next();
  }
};

let requestCount = 0;

const numberOfRequests = (req, res, next) => {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  next();
};

app.use(express.json());

app.get("/health-checkup", numberOfRequests, userMiddleWare, (req, res) => {
  res.send("Health checkup is done. You are healthy.");
});

app.get(
  "/kidney-checkup",
  numberOfRequests,
  userMiddleWare,
  kidneyMiddleware,
  (req, res) => {
    res.send("Kidney checkup is done. Your kidneys are healthy.");
  }
);

app.post("/heart-checkup",numberOfRequests,(req,res)=>{
    const size = req.body.heart.size;
    console.log("Size of the heart is: ",size);
    res.send("Heart checkup is done. Your heart is healthy.");
});


//To give a better error message to the user
app.use((err,req,res,next)=>{
    console.log("There was an error");
    res.status(500).send("Sorry, there was an error");
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
