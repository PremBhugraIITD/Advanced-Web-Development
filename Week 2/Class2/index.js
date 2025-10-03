const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello World");
//   res.send("Hello World"); //One request can send only one response.
  res.status(404).send("<h1>Hello World</h1>")
//   res.json({
//     name: "Prem",
//     age: 21,
//   });
});

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.get("/headers",(req,res)=>{
    console.log("Headers: ",req.headers);
    console.log("One of the headers: ",req.headers["temporary"]);
    res.send("These were the headers");
    console.log("Done with headers");
});

app.get("/params",(req,res)=>{
    console.log("Params: ",req.query);
    console.log("One of the params: ",req.query["Kirmada"]);
    // console.log(req);
    res.send("These were the params");
    console.log("Done with params");
});

app.get("/body",(req,res)=>{
    console.log("Body: ",req.body);
    res.send("This was the body");
    console.log("Done with body");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
