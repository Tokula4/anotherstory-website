import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
const Header = () => {
  return (
    <div className=" h-20   px-4 md:px-8  xl:32  relative " >
      <div className=" h-full flex items-center justify-between md:hidden " >
      {/* MOBILE */}
      <Link href="/" > <div className="text-2xl tracking-wide " >Another Story</div></Link>
      <Menu/>
      </div>

      {/* Bigger Screen */}
      <div className=" bg-black text-white hidden md:flex items-center justify-between h-full  " >
        {/* left */}
        <div className=" " >
        <Link href="/" >
         
           <div className="text-2xl font-bold  tracking-wide " >Another Story</div>
           </Link>

        </div>
        {/* Right */}
        <div className="   font-bold space-x-4   " >
        <Link href="" >Home page</Link>
                  <Link href="" >About Us </Link>
                    <Link href="" >How to Vote</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Header
