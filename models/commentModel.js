const mongoose = require("mongoose");

//new schema is defined
const commentSchema = new mongoose.Schema({
    //konsi post par comment kar rhe hai, y define krngy post ki id se kyu ki post khud ek model hai eslie refer kar rhe hai , create nai kar rhe
    post:{
        //here refering the id in type , post ka type id hai , this is how refer is done by id
        type: mongoose.Schema.Types.ObjectId,
        //reference to post model , kis model ki id refer krni hai vo define kr rhe hai 
        ref:"Post", 
    },
    //post par kon comment kar raa hai
    user:{
        type:String,
        required:true,
    },
    //kya comment kar raha hai
    body:{
        type:String,
        required:true,
    }
})


//exporting commentSchema by name of Comment
module.exports = mongoose.model("Comment",commentSchema);