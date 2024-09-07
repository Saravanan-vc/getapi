const express = require('express');
const mongoose = require('mongoose');
const attach = require('./dbase')

const app = express();
app.use(express.json())
const port = 3000;
const connectme = mongoose
.connect(
    "mongodb+srv://vsaravananc:Flutteratlas@shoes.dsvlo.mongodb.net/usershoe?retryWrites=true&w=majority&appName=shoes"
)
.then(
    app.listen(port)
    
)
app.get("/",
   async (req,res)=>{
       const request = await attach.find({});
       res.status(200).json(request)
    }
);