
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

 exports.createComment = async(req , res)=>{
      try{
        //fetching data from req body
        const {post , user , body } = req.body;
        //creating new comment object
        const comment = new Comment ({
            post , user , body
        });
        //storing or saving new comment object into data base by using save function
        const savedComment = await comment.save();
        //jo nayi comment bani hai usko Post k andar bhi update karna hai
        //find the post by using id function and update the new comment into that post , comments vale array k andar new comment ki id ko insert kar rhe hai by push operator or Update se update kar rhe hai Post ko
        //here new : true is used when we want to get updated documents 
        
        const updatedPost = await Post.findByIdAndUpdate(post ,{$push: {comments:savedComment._id}} , {new: true})
        //.populate used to fetch the actual object for given id
        //exec function is used to execute the written populate query
     //.populate("comments").exec();
        res.status(200).json({
            success:true,
            post:updatedPost,
            message:"comment done"
        })
      }
        catch(err){
        console.log(err),
        res.status(500).json({
            success:false,
            post:"comment not saved",
            message:err.message
        })
      }
 }