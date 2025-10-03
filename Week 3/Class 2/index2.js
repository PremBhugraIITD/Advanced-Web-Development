import mongoose from "mongoose";
import express from "express";

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://PremBhugra:Character+%40123@cluster0.afqla.mongodb.net/People"
);

const User = mongoose.model("All Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({
    email: username,
  });

  if (existingUser) {
    console.log("User already exists");
    console.log(existingUser);
    return res.status(400).send("User already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  console.log("User saved successfully");
  return res.status(201).send("User saved successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
