const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    //title hoga 
    title:{
        type:String,
        requied :true
    },
    body:{
        type:String,
        required:true,
    },
    likes: [{
        //likes ka type hodi object ki id
        type: mongoose.Schema.Types.ObjectId,
        //id k li reference de rhe hai object ka 
        ref:"Like"
    }],
    comments: [{
        //comments ka type hogi object ki id 
        type: mongoose.Schema.Types.ObjectId,
        //id k li reference de rhe hai object ka 
        ref:"Comment"
    }]
})


module.exports = mongoose.model("Post",postSchema);