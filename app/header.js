import React from 'react'
import Link from 'next/link'
import { LogoutBtn } from '@/components/clients'

export default function Header() {
  return (
    <>
        <nav className='bg-[#1d1d1d] flex justify-between'>  
            <img src="https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo" alt="" className='w-[5rem] h-auto ml-2'/>
            <ul className='flex space-x-4 items-center mr-5 '>
                <Link href={"/"} className='text-lg text-[#ffcc66] font-extrabold hover:underline '><li>Home</li></Link>
                <Link href={"/about"} className='text-lg text-[#ffcc66] font-extrabold hover:underline '><li>About</li></Link>
                <Link href={"/contact"} className='text-lg text-[#ffcc66] font-extrabold hover:underline '><li>Contact</li></Link>
                <LogoutBtn/>
            </ul>
        </nav>
    </>
  )
}
