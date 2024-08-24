
const express =require('express');
// const mongoose=require('mongoose');
const User=require("../models/userModel");
const router=express.Router();
router.post("/",async(req,res)=>{
    try{
        const {name,email,age}=req.body;
        const userData= await User.create({
        name:name,
        email:email,
        age:age,
    });
    res.status(201).json(userData);

    }catch(error){
        console.log(error);
        res.status(400).json({error: error.message});

    }
    
})

router.get("/",async(req,res)=>{
    try{
        const showall=await User.find();
        res.status(200).json(showall);
    }catch(error)
    {
        res.status(404).json({
            error:error.message 
        })
    }
    

})
router.get("/:id",async(req,res)=>{
    //url se lene ke liye params and input field se lene ke liye body 
    const id=req.params.id;
    try{
        const singleUser=await User.findById({_id :id});
        res.status(200).json(singleUser);
    }catch(error)
    {
        res.status(404).json({
            error:error.message 
        })
    }
    

})

router.delete("/:id",async(req,res)=>{
    //url se lene ke liye params and input field se lene ke liye body 
    const id=req.params.id;
    try{
        const singleUser=await User.findByIdAndDelete({_id :id});
        res.status(200).json(singleUser);
    }catch(error)
    {
        res.status(404).json({
            error:error.message 
        })
    }
    

})

router.patch("/:id",async(req,res)=>{
    //url se lene ke liye params and input field se lene ke liye body 
    const id=req.params.id;
    const {name,email,age}=req.body;
    try{
        const updateUser=await User.findByIdAndUpdate(id, req.body,{new :true});
        res.status(200).json(updateUser);
    }catch(error)
    {
        res.status(404).json({
            error:error.message 
        })
    }
    

})



module.exports=router


