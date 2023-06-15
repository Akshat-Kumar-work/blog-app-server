const mongoose = require('mongoose');


require("dotenv").config();
const url = process.env.dbURL;


const dbconnect = ()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( ()=>{
        console.log("DB connected");
    })
    .catch( (err)=>{err.message; process.exit(1)})
}

module.exports = dbconnect;