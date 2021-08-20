// models
const Post = require("../models/Post");

class PostServices {
  renderHome(req, res) {
    res.render("posts/home");
  }
}

module.exports = PostServices;
