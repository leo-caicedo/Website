const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

module.exports = model("Post", postSchema);
