const { Router } = require("express");

const router = Router();
// services
const PostServices = require("../services/posts.service");
const postsServices = new PostServices();

router.get("/home", postsServices.renderHome);

module.exports = router;
