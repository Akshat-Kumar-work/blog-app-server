const Like = require("../models/likeModel");
const Post = require("../models/postModel"); 

    exports.likePost = async (req , res) =>{
        try{
            const { post , user } = req.body;
            const like = new Like({
                post , user,
            });

            const savedLike = await like.save();

            //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post ,{$push: {likes:savedLike._id}} , {new: true})
            
            res.json({
                post : updatedPost,
            });
        }
        catch(err){
            console.log(err)
           return  res.status(400).json({
                error: "error while fetching the post",
            })
        }
    }



