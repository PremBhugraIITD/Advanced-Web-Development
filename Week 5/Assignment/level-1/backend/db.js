import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://PremBhugra:Character+%40123@cluster0.afqla.mongodb.net/BusinessCards"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database");
  });

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  buttons: [
    {
      title: String,
      url: String,
    },
  ],
});

const cards = mongoose.model("cards", cardSchema);

export { cards };
