// models
const Post = require("../models/Post");

class PostServices {
  async renderHome(req, res) {
    const posts = await Post.find({}).sort({ createdAt: "desc" }).lean()
    res.render("posts/home", { posts });
  }
}

module.exports = PostServices;
