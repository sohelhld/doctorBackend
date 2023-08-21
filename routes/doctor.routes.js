const express = require('express');
const { doctorModel } = require('../models/doctor.model');
const doctorRouter = express.Router()

//creat
doctorRouter.post("/adddoctor",async(req,res)=>{
    const payload = req.body
    try {      
        const data = new doctorModel(payload)
        await data.save()
        res.status(200).send({message:"New doctor is added"})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//read
doctorRouter.get("/getdoctor",async(req,res)=>{
    // const payload = req.body

    const {specialization}=req.query
    const query ={}

    if(specialization){
       query.specialization =specialization
    }


    try {      
        const data = await doctorModel.find(query)
        
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//update
doctorRouter.patch("/updatedoctor/:id",async(req,res)=>{
     const {id} = req.params
     const payload=req.body
    try {      
        const data = await doctorModel.findByIdAndUpdate({_id:id},payload);
        
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

doctorRouter.delete("/deletedoctor/:id",async(req,res)=>{
    const {id} = req.params
   try {      
       const data = await doctorModel.findByIdAndDelete({_id:id});
       
       res.status(200).send({message:"doctor is deleted"})
   } catch (error) {
       res.status(400).send({message:error.message})
   }
})




module.exports={
    doctorRouter
}