import React from 'react'

const Info = () => {
  return (
    <>
    <section className="bg-white border ">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black ">More about Us</h2>
            <p className="mb-4">Welcome to Another Story!
Hello and welcome to Another Story, your go-to destination for all things entertainment! Whether you're a seasoned subscriber or just discovering our channel, we are excited to have you join our community.

Who We Are
Another Story is a passionate entertainment enthusiast dedicated to bringing you the latest and greatest in the world of movies, TV shows, music, and pop culture. Our mission is to create engaging and informative content that keeps you entertained and in the loop with the entertainment industry's ever-evolving landscape.


Join Us on This Journey
Thank you for being a part of Another Story. Whether you’re here for the first time or have been with us since the beginning, we appreciate your support. Hit the subscribe button and turn o.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="\cover-img4.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/cover-img5.png" alt="office content 2"/>
        </div>
    </div>
</section>
    </>
    
  )
}

export default Info
