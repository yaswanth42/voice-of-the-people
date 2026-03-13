const express = require("express")
const router = express.Router()

const User = require("../models/User")
const bcrypt = require("bcryptjs")

// REGISTER USER
router.post("/register", async (req,res)=>{

const {name,email,password} = req.body

const hashedPassword = await bcrypt.hash(password,10)

const user = new User({
name,
email,
password:hashedPassword
})

await user.save()

res.json({message:"User Registered Successfully"})

})

module.exports = router