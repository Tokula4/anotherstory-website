import React from 'react'

const Info = () => {
  return (
    <section className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  text-[#eda347] ">Watch Our Show  <span className="text-[#eda347]" > Now On Youtube</span> </h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          
            <a href="https://www.youtube.com/channel/UCBAkvJn6xxlhCppcE5zsJVg" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Watch Our Video
            </a> 
            <a href="https://www.youtube.com/channel/UCBAkvJn6xxlhCppcE5zsJVg" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 ">
            <img src='/youtube-img.png' width={30} height={30} className="cursor-pointer"/>
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:px-5 lg:col-span-5 lg:flex">
            
       
            <div className=" w"  >
            <img src="/cover-img1.png"  alt="image"/>
            </div>
         
            
        </div> 

         
    </div>
</section>
  )
}

export default Info
