const express = require("express")
const router = express.Router()

const Complaint = require("../models/Complaint")

// CREATE COMPLAINT
router.post("/create", async (req,res)=>{

const {title,description} = req.body

const complaint = new Complaint({
title,
description
})

await complaint.save()

res.json({message:"Complaint Created"})

})

// GET ALL COMPLAINTS
router.get("/all", async (req,res)=>{

const complaints = await Complaint.find()

res.json(complaints)

})

module.exports = router