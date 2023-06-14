require("dotenv").config();
const url = process.env.dbURL;

const mongoose = require('mongoose');

const dbconnect = ()=>{
    mongoose.connect(url,{
        useNewParser:true,
        useUnifiedTopology:true
    })
    .then( ()=>{
        console.log("DB connected");
    })
    .catch( (err)=>{err.message; process.exit(1)})
}

module.exports = dbconnect;