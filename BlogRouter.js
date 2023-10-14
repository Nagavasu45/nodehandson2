const BlogRouter=require('express').Router();
BlogRouter.get("/Home",(req,res)=>{
    res.send("this is my Home page")
})
BlogRouter.get("/Bollywood",(req,res)=>{
    res.send("this is my Bollywood page")
})
BlogRouter.get("/Hollywood",(req,res)=>{
    res.send("this is my Hollywood page")
})
BlogRouter.get("/Fitness",(req,res)=>{
    res.send("this is my Fitness page")
})
module.exports=BlogRouter