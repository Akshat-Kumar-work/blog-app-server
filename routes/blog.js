const express = require("express");
const router = express.Router();

//importing controllers
const {createComment} = require("../controllers/commentController");

//creating routes
router.post("/comments/create",createComment);

//exporting
module.exports = router;