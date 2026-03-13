const express = require("express")
const cors = require("cors")
const complaintRoutes = require("./routes/complaintRoutes")

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/complaints",complaintRoutes)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})