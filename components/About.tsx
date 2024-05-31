import React from 'react'

const About = () => {
  return (
    <div className="bg-black ">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-white">About Us </h2>
  
        <div className="mt-6 space-y-12 lg:grid-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 group-hover:opacity-75 sm:h-64">
              <img src="/logo.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="object-cover object-center w-full h-full"/>
            </div>
        
          </div>
          <div>
          <h3 className="mt-6 font-bold text-white">
              <a href="https://www.youtube.com/watch?v=Ye6Kk40mgy0&t=1s">
                <span className="absolute inset-0"></span>
                Welcome to Another Story!
              </a>
            </h3>
            <p className="font-serif text-base font-semibold text-white"><br></br>
                           Hello and welcome to Another Story, your go-to destination for all things entertainment!<br></br> Whether you're a seasoned subscriber or just discovering our channel,<br></br> we are excited to have you join our community.<br></br>

 <span  className=""  >Who We Are <br></br></span>
Another Story is a passionate entertainment enthusiast dedicated to bringing you the latest and greatest in the world of movies,<br></br> TV shows, music, and pop culture. Our mission is to create engaging and informative content that keeps you entertained and in the loop with the entertainment industry's ever-evolving landscape.<br></br>


Join Us on This Journey
Thank you for being a part of Another Story. Whether you’re here for the first time or have been with us since the beginning, we appreciate your support. Hit the subscribe button and turn on </p>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
