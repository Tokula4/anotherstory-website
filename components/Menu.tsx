"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => { 
    const [open , setOpen] = useState(false)
  return (
    <div className="" >
        <img src='/menu.png' width={28} height={28} className="cursor-pointer" onClick={() => setOpen((prev) => !prev )} />
        {
            open && (
                <div  className="absolute bg-black text-white left-0 top-20 w-full h[calc(100vh-80px )] flex flex-col items-center justify-center gap-8 text-xl z-10 " >
                    <Link href="" >Home page</Link>
                   <Link href="" >About Us </Link>
                    <Link href="" >How to Vote</Link>
                </div>
            )

        }
     
    </div>
  )
}

export default Menu
