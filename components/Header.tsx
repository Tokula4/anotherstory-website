'use client'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 xl:32" >
      <div className="flex items-center justify-between h-full text-white md:hidden" >
      {/* MOBILE */}
      <Link href="/" > <div className="text-2xl tracking-wide " >Another Story</div></Link>
      <Menu/>
      </div>

      {/* Bigger Screen */}
      <div className="items-center justify-between hidden h-full text-black md:flex" >
        {/* left */}
        <div className="" >
        <Link href="/" >
         
           <div className="text-2xl font-bold tracking-wide " >
            <img src='/logo.png' width={100} height={100} />
           </div>
           </Link>

        </div>
        {/* Right */}
        <div className="space-x-4 font-bold " >
        <Link href="" >Home </Link>
                  <Link href="/aboutpage">About Us </Link>
                  
        </div>
      </div>
      
    </div>
  )
}

export default Header
