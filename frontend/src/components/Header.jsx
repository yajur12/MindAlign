import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 relative overflow-hidden">
  {/* Left side of the header */}
  <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw]">
    <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
      Book Appointment <br /> With Trusted Therapists
    </p>
    <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
      <img className="w-28" src={assets.group_profiles} alt="group_profiles" />
      <p>
        Simply browse through our extensive list of trusted therapists, <br className="hidden sm:block" />
        schedule your appointment hassle free
      </p>
    </div>
    <a
      href="#speciality"
      className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
    >
      Book Appointment <img className="w-3" src={assets.arrow_icon} alt="arrow_icon" />
    </a>
  </div>

  {/* Right side of the header */}
  <div className="md:w-1/2 relative flex justify-end items-end">
    <img
      className="w-[90%] md:w-[110%] lg:w-[130%] h-auto max-w-none rounded-lg md:absolute md:bottom-0 md:right-0"
      style={{
        transform: 'translate(10%, 0)',
      }}
      src={assets.group_header}
      alt="header_image"
    />
  </div>
</div>



  )
}

export default Header