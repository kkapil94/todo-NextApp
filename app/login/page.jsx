"use client";

import Link from "next/link";
import React from "react";
 
export default function Page() {
    const handleSubmit = ()=>{

    }
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[80vh]">
        <h3 className="text-3xl font-bold mb-10">Login</h3>
      <form className="flex flex-col space-y-5 w-96 border-2 p-5" >
        <div className="flex justify-between">
          <h6 className="text-xl font-semibold ">Email:</h6>
          <input type="text" placeholder="enter yor email" className="border-2 outline-none"/>
        </div>
        <div className="flex justify-between">
          <h6 className="text-xl font-semibold">Password:</h6>
          <input type="password" placeholder="enter yor password" className="border-2"/>
        </div>
        <button type="submit" className="text-center bg-[#1d1d1d] text-[#ffcc66] active:text-[#fff] p-2">Login</button>
        <span className="text-center font-bold text-xl">OR</span>
        <Link href="/register" className="text-center active:text-[#fff]  hover:bg-[#1d1d1d] hover:text-[#ffcc66] p-2 border-2">Sign up</Link>
      </form>

    </div>
    </>
  );
}
