"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext({user:{}})

export const ContextProvider = ({children}) =>{
    const [user,setUser] = useState()
    useEffect(()=>{
       fetch("/api/auth/me")
       .then(res=>res.json()).then(data=>{if(data.success);setUser(data.user)})
    },[])
    return (
        <Context.Provider value={{user,setUser}}>
            {children}
        </Context.Provider>
    )
}



export const LogoutBtn = ()=>{
    const route = useRouter()
    const {user,setUser} = useContext(Context)
    const logout =async ()=>{
        await axios.get("/api/auth/logout");
        setUser(null)
        route.push("/login")
        // console.log(null);
    }
    return (
        user?(<button  className='text-lg text-[#ffcc66] font-extrabold hover:underline ' onClick={logout}>Logout</button>):
        <Link href={"/login"} className='text-lg text-[#ffcc66] font-extrabold hover:underline '>Login</Link>
    )
}

export const DelBtn = ({id})=>{
    const route = useRouter()
    const handleDel =async ()=>{
       const data =await axios.delete(`/api/task/${id}`);
       route.refresh()
    }
    return (
    <>
        <input type="checkbox" name="" id="" className="mr-6 cursor-pointer"  />
        <button className="text-md p-2 rounded-md font-semibold text-[#ffcc66] bg-[#1d1d1d]" onClick={handleDel}>Delete</button>
    </>
    )
}



