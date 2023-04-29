"use client";
import React from "react";

export default function addToForm() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[80vh]">
      <form className="flex flex-col space-y-8 border-2 p-5 w-full" >
        <div className="flex flex-col space-y-5 justify-between ">
          <input type="text" placeholder="Todo Title" className="border-2 outline-none"/>
          <input type="text" placeholder="Todo Text" className="border-2 outline-none"/>
        </div>
        <button type="submit" className="text-center bg-[#1d1d1d] text-[#ffcc66] active:text-[#fff] p-2">Add</button>
      </form>

    </div>
    </>
  );
}
