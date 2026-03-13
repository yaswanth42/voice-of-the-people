import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const loginUser = async () => {

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{
email,
password
}
)

localStorage.setItem("token",res.data.token)

alert("Login successful")

navigate("/dashboard")

}

return(

<div>

<h2>Login</h2>

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)} />

<input placeholder="Password"
onChange={(e)=>setPassword(e.target.value)} />

<button onClick={loginUser}>Login</button>

</div>

)

}

export default Login