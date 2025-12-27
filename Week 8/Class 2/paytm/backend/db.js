import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://PremBhugra:Character%2B%40123@cluster0.afqla.mongodb.net/paytm"
    );
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("Error occured while connecting to MongoDB: ", err);
  }
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: String,
});

const User = mongoose.model("User", userSchema);

const accounSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  balance: { type: Number, required: true },
});

const Account = mongoose.model("Account", accounSchema);

export { User, Account };

connectDB();
