import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Another Story Shows </h2>
  
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="relative group">
            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="/cover-img1.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="object-cover object-center w-full h-full"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="https://www.youtube.com/watch?v=Ye6Kk40mgy0&t=1s">
                <span className="absolute inset-0"></span>
                LIPS 'Life in Private School'
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">This is a Youtube series that talks about issuess in private school and the drama among student</p>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
