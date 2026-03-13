import { useState } from "react";
import axios from "axios";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async () => {

 try{

   await axios.post(
   "http://localhost:5000/api/auth/register",
   {name,email,password}
   );

   alert("Registration successful");

 }catch(err){
   alert("Error registering user");
 }

}

return(

<div className="flex justify-center items-center h-screen bg-gray-100">

<div className="bg-white p-10 rounded-xl shadow-md w-96">

<h2 className="text-2xl font-bold mb-6 text-center">
Register
</h2>

<input
type="text"
placeholder="Name"
className="w-full border p-2 mb-4"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="w-full border p-2 mb-4"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full border p-2 mb-4"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleRegister}
className="bg-blue-600 text-white w-full py-2 rounded"
>
Register
</button>

</div>

</div>

)

}

export default Register;