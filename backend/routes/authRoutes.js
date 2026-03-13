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

const jwt = require("jsonwebtoken")

router.post("/login", async (req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.json({message:"User not found"})
}

const isMatch = await bcrypt.compare(password,user.password)

if(!isMatch){
return res.json({message:"Invalid password"})
}

const token = jwt.sign(
{userId:user._id},
"secretkey",
{expiresIn:"1d"}
)

res.json({token})

})