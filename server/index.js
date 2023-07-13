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
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to MongoDB database");
});

// Routes
app.get("/", (req, res) => {
    res.send("MY API");
});

app.listen(9002, () => {
    console.log("Server is running on port 9002");
});
