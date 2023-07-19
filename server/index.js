import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/loginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

const User = new mongoose.model("User",userSchema)
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to MongoDB database");
});

// Routes
app.post("/login", (req, res) => {
    res.send("MY API login");
});

app.post("/register", (req, res) => {
    res.send("MY API register");
});

app.listen(9002, () => {
    console.log("Server is running on port 9002");
});
