//express imported
const express = require("express");
//server created
const server = express();

//loading process object with env file data
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//parsing request data from json format to js object by middleware
server.use(express.json());

const routes = require("./routes/blogRoute");

server.use("akshat/Blogs",routes);

server.listen(PORT,()=>{
    console.log("SERVER STARTED");
});

const dbconnect = require("./config/dbconnect");

dbconnect();

