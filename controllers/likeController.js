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

    exports.unlikePost = async (req , res)=>{
        try{
            const { post , like } = req.body;

           const deleteLike = await Like.findOneAndDelete({post:post, _id:like});
            //post m likes vale array m deleteLike ki id ko delete krna hai pull ki help se delete hoga
            //find krne k lie post pass krdi aur update krne k lie pull 
           const updatedPost = await Post.findByIdAndUpdate(post ,{$pull: {likes:deleteLike._id}} , {new: true})

    
            
            res.json({
                post : updatedPost,
                message:"unlike succesfully"
            });
        }
        catch(err){
            console.log(err)
            return  res.status(400).json({
                 error: "error while fetching the post",
             })
        }
    }



