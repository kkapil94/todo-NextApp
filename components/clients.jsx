"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";

const Context = createContext({user:{}})

export const ContextProvider = ({children}) =>{
    const [user,setUser] = useState()
    return (
        <Context.Provider value={{user,setUser}}>
            {children}
        </Context.Provider>
    )
}


export const LogoutBtn = ()=>{
    const {user} = useContext(Context)
    return (
        user?(<button >Logout</button>):
        <Link href={"/login"} className='text-lg text-[#ffcc66] font-extrabold hover:underline '>Login</Link>
    )
}



