const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({

    //defining kis post par like kar rhe hai
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    //defining kon like kar rha hai
    user:{
        Type: String,
        required:true,
    }
});

module.exports = mongoose.model("Like",likeSchema);