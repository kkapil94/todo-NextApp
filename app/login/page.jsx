"use client";

import { Context } from "@/components/clients";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useState } from "react";
import {redirect} from "next/navigation"
 
export default function Page() {
  const [cred,setCred] = useState({})
  const {user,setUser} = useContext(Context)
  const handleChange = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }
  
  const handleSubmit =async (e)=>{
    e.preventDefault()
    // console.log(user);
    const {data} =await axios.post("/api/auth/login",cred);
    if(data.success){
      setUser(data.user)
    }
   }
    if(user){
      console.log(user);
       redirect("/")
    }
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[80vh]">
        <h3 className="text-3xl font-bold mb-10">Login</h3>
      <form className="flex flex-col space-y-5 w-96 border-2 p-5" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h6 className="text-xl font-semibold ">Email:</h6>
          <input name="email" value={cred.email} type="text" required placeholder="enter yor email" className="border-2 outline-none"  onChange={handleChange}/>
        </div>
        <div className="flex justify-between">
          <h6 className="text-xl font-semibold">Password:</h6>
          <input name="password" value={cred.password} required type="password" placeholder="enter yor password" className="border-2" onChange={handleChange}/>
        </div>
        <button type="submit" className="text-center bg-[#1d1d1d] text-[#ffcc66] active:text-[#fff] p-2">Login</button>
        <span className="text-center font-bold text-xl">OR</span>
        <Link href="/register" className="text-center active:text-[#fff]  hover:bg-[#1d1d1d] hover:text-[#ffcc66] p-2 border-2">Sign up</Link>
      </form>

    </div>
    </>
  );
}
