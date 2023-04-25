import 'dotenv/config'; 
import "../database/connectdb.js";
import express from 'express'
//const mongoose = require('mongoose');
//require("dotenv").config();

const app = express();
const port = 9000;
const PORT = process.env.PORT || 9000;
//routes
app.get("/", (req,res) => {
    res.send("welcome to my API");
});



app.listen(PORT, () => console.log('server listening on port', PORT));