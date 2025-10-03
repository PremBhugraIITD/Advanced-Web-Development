import express from "express";

const app = express();
const port = 3000;

const ageVerification = (req, res, next) => {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.send("You are not allowed on this ride.");
  }
};

app.get("/see-saw",(req,res)=>{
    res.send("Welcome to the see-saw! no age restrictions here.");
});

app.use(ageVerification); //Applied to all routes below

app.get("/rollercoaster",(req, res) => {
    res.send("Welcome to the rollercoaster!");
});

app.get("/ferris-wheel",(req, res) => {
    res.send("Welcome to the ferris wheel!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
