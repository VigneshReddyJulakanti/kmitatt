const express = require("express");
const router = express.Router();
const axios =require("axios")

router.post("/a318",async(req,res)=>{
    try{
    let data={}
    await axios.post(`http://teleuniv.in/netra/api.php`, {
        "method":"318",
        "rollno":req.body.no
      }).then(res=>{data=res})
    
      return res.send(data.data)
    }catch(e){
        console.log(e)
    }
})


router.post("/a314",async(req,res)=>{
    try{
    let data={}
    await axios.post(`http://teleuniv.in/netra/api.php`, {
        "method":"314",
        "rollno":req.body.no
      }).then(res=>{data=res})
    
      return res.send(data.data)
    }catch(e){
        console.log(e)
    }
})


router.post("/a32",async(req,res)=>{
    try{
    let data={}
    await axios.post(`http://teleuniv.in/netra/api.php`, {
        "method":"32",
        "rollno":req.body.no
      }).then(res=>{data=res})
    
      return res.send(data.data)
    }catch(e){
        console.log(e)
    }
})
module.exports=router