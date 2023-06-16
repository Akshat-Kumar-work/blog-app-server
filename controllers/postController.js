const Post = require("../models/postModel");

 exports.createPost = async (req,res)=>{
    try{
        const { title , body } = req.body;
        //new Post object created
        const post = new Post ({
            title, body});
            
        const savedPost = await post.save();

        res.status(200).json({
            post:savedPost,

        })
    }
    catch(err){
        return res.status(500).json({
            error:`error while creating post ${err}`,
        })
    }
 }

 exports.getAllPost = async (req,res) =>{
    try{
        const posts = await Post.find().populate("comments").exec();
        res.status(200).json({
            posts,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"error while fetching post"
        })
    }
 }