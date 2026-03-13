import {useState} from "react"
import axios from "axios"

function CreateComplaint(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")

const submitComplaint = async () => {

await axios.post("http://localhost:5000/api/complaints/create",{
title,
description
})

alert("Complaint Submitted")

}

return(

<div>

<h2>Create Complaint</h2>

<input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />

<textarea placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />

<button onClick={submitComplaint}>Submit</button>

</div>

)

}

export default CreateComplaint