import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets'
import { TherapistContext } from '../context/TherapistContext'

const Sidebar = () => {
  
  const {token} = useContext(AdminContext)
  const {dToken} = useContext(TherapistContext)

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        token && <ul className='text-[#515151] mt-5'>
                    
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'} >
            <img src={assets.home_icon} alt='' />
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/all-appointments'} >
            <img src={assets.appointment_icon} alt='' />
            <p>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/add-therapist'} >
            <img src={assets.add_icon} alt='' />
            <p>Add Therapist</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/therapist-list'} >
            <img src={assets.people_icon} alt='' />
            <p>Therapist List</p>
          </NavLink>
        </ul>
      }

      {
        dToken && <ul className='text-[#515151] mt-5'>
                    
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/therapist-dashboard'} >
            <img src={assets.home_icon} alt='' />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/therapist-appointments'} >
            <img src={assets.appointment_icon} alt='' />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#E6F6F4] border-r-4 border-primary' : ''}`} to={'/therapist-profile'} >
            <img src={assets.people_icon} alt='' />
            <p className='hidden md:block'>Profile</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar