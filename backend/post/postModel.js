const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  description: String,
  deadline: { type: String, default: Date.now() },
  review: [
    {
      userName: String,
      userId: String,
      comment: String,
      date: { type: String, default: Date.now() },
    },
  ],
  prayers: [
    {
      userName: String,
      userId: String,
      date: { type: String, default: Date.now() },
    },
  ],
  userId: String,
  userName: String,
});

module.exports = mongoose.model("posts", postSchema);
