"use strict";
const mongoose =require ('mongoose')
const express = require('express')
const path=require("path")
const mongoURI =process.env.mongoURI || "mongodb://localhost:27017/kmitattn?readPreference=primary&appname=MongoDB%20Compass&ssl=false";



const connectToMongo =async() => {

    await mongoose.connect(mongoURI ,()=>{
        console.log("Connected to mongo successfully ")
})

}
connectToMongo(); 



var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000 


app.use(express.json())
app.use(cors({
  origin:"*",
}))

app.use('/api/update',require('./routes/update'));
app.use('/api/requests',require('./routes/requests'))
app.get('/', (req, res) => {
  
  res.send("Welcome to boom world")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

