const express = require("express");

const app = express();

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


// Import Routes
const authRoute = require("../routes/auth");
import todoRoute from "../routes/todo";

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/todo", todoRoute);

// Connect to DB
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useFindAndModify: false},
  () => console.log("connected to db!")
);

const PORT = process.env.PORT || 3000;


const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`);
  });
};

exports.start = start;
exports.stop = stop;
