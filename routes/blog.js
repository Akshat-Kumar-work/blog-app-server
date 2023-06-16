const express = require("express");
const router = express.Router();

//importing controllers
const {createComment} = require("../controllers/commentController");
const {createPost , getAllPost} = require("../controllers/postController")

//creating routes
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts/get",getAllPost);
//exporting
module.exports = router;