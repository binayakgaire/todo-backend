import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  description: {
    type: String,
    min: 10,
    max: 1000,
  },
  deadline: {
    type: Date,
  },
  associated_users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Todo", todoSchema);
