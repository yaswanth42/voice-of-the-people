import { useState } from "react";
import axios from "axios";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    try{

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {email,password}
      );

      localStorage.setItem("token",res.data.token);

      alert("Login Successful");

    }catch(err){
      alert("Login Failed");
    }

  }

  return(

    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">

      <motion.div
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className="backdrop-blur-lg bg-white/20 p-10 rounded-2xl shadow-xl w-96 text-white"
      >

        <h2 className="text-3xl font-bold text-center mb-8">
          Voice of the People
        </h2>

        {/* Email */}

        <div className="flex items-center bg-white/30 p-2 rounded-lg mb-4">

          <Mail className="mr-2"/>

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent outline-none w-full"
            onChange={(e)=>setEmail(e.target.value)}
          />

        </div>

        {/* Password */}

        <div className="flex items-center bg-white/30 p-2 rounded-lg mb-6">

          <Lock className="mr-2"/>

          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full"
            onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        {/* Button */}

        <button
          onClick={handleLogin}
          className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Login
        </button>

      </motion.div>

    </div>

  )

}

export default Login;