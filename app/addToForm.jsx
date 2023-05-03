"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddToForm() {
  const [todo,setTodo] = useState({})
  const router = useRouter()
  const handleChange = (e)=>{
    setTodo({...todo,[e.target.name]:e.target.value})
  }
  
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const {data} =await axios.post("/api/task/newtask",todo);
    if(data.success){
      setTodo({title:"",task:""})
      router.refresh()
    }
   }
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full my-10">
      <form className="flex flex-col space-y-8 border-2 p-5 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5 justify-between ">
          <input name="title" value={todo.title} onChange={handleChange} type="text" placeholder="Todo Title" className="border-2 outline-none"/>
          <input name="task" value={todo.task} onChange={handleChange} type="text" placeholder="Todo Text" className="border-2 outline-none"/>
        </div>
        <button type="submit" className="text-center bg-[#1d1d1d] text-[#ffcc66] active:text-[#fff] p-2">Add</button>
      </form>

    </div>
    </>
  );
}
