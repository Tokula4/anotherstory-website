import React from 'react'

const Hero = () => {
  return (
    <>
 
            <section className=" ">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight uppercase text-white md:text-5xl xl:text-6xl">There's Always <span className="text-[#6c28a4]" >a Story to tell</span> </h1>
            <p className="max-w-2xl mb-6  font-semibold text-white lg:mb-8 md:text-lg lg:text-xl">Another Story is a passionate entertainment enthusiast dedicated to bringing you the latest and greatest in the world of movies, TV shows, music, and pop culture.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Join Our Community
                <svg className="w-5 h-5 ml-2 -mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns=""><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCBAkvJn6xxlhCppcE5zsJVg" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Watch Our Video
            </a> 
        </div>

                    
    </div>
</section>


</>
    )
}

export default Hero
