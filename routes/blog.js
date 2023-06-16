const express = require("express");
const router = express.Router();

//importing controllers
const {createComment} = require("../controllers/commentController");
const {createPost , getAllPost} = require("../controllers/postController");
const {likePost,unlikePost} = require("../controllers/likeController");

//creating routes
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts/get",getAllPost);
router.post("/likes/like",likePost);
router.put("/likes/unlike",unlikePost);

//exporting
module.exports = router;