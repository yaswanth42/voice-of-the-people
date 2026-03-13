import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Dashboard(){

const [complaints,setComplaints] = useState([])

useEffect(()=>{

fetchComplaints()

},[])

const fetchComplaints = async ()=>{

const res = await axios.get(
"http://localhost:5000/api/complaints/all"
)

setComplaints(res.data)

}

return(

<div>

<h2>Citizen Dashboard</h2>

<Link to="/create">
<button>Create Complaint</button>
</Link>

<h3>Your Complaints</h3>

{complaints.map((c)=>(
<div key={c._id}>

<h4>{c.title}</h4>
<p>{c.description}</p>
<p>Status: {c.status}</p>

</div>
))}

</div>

)

}

export default Dashboard