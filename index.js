//express imported
const express = require("express");

//server created
const server = express();

//loading process object with env file data
require("dotenv").config();
const PORT = process.env.PORT || 4000;


//parsing request data from json format to js object by middleware , server use krega express.js ko
server.use(express.json());


const blog = require("./routes/blog")

//mounting , and mapping with route
server.use("/akshat",blog);

const dbconnect = require("./config/db");
dbconnect();

server.listen(PORT,()=>{
    console.log("SERVER STARTED");
});

server.get("/",(req,res)=>{
    res.send("server default page")
});

