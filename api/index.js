import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js';

mongoose.connect(
  "mongodb+srv://Akshay0322:Akshay@mern-estate.8dl6wxq.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate"
).then;
console.log("Connected to MongoDB");

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000..");
});

app.use("/api/user", userRouter);