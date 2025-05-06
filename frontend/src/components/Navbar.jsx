import React,{useState} from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Brain } from 'lucide-react';
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const Navbar = () => {
    const navigate= useNavigate();
    const[showMenu, setShowMenu]=useState(false);
  const {token, setToken,userData}=useContext(AppContext)

  const logout=()=>{
    setToken(false);
    localStorage.removeItem('token');
  }
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* <img onClick={()=>{
        navigate('/')
      }} className="w-44 cursor-pointer" src={assets.logo} alt="logo" /> */}
      <div className="flex-shrink-0  flex items-center">
                <Brain onClick={()=>{
        navigate('/')
      }} className="h-6 w-6 cursor-pointer text-teal-600" />
                <span onClick={()=>{
        navigate('/')
      }} className="ml-2 text-xl  cursor-pointer font-semibold text-teal-600">MindAlign</span>
          </div>

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/therapists">
          <li className="py-1">All Therapists</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <a target="_blank" href={import.meta.env.VITE_ADMIN_PANEL} className="border px-5 text-xs py-1.5 rounded-full" style={{ cursor: 'pointer' }}>Admin Panel</a>
      </ul>
      <div className="flex items-center gap-4">
      {
        token && userData
        ?<div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="profile"/>
            <img className="w-2.5" src={assets.dropdown_icon} alt=""/>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p onClick={()=>{
                        navigate('/my-profile')
                    }}
                    className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=>{
                        navigate('/my-appointments')
                    }}
                    className="hover:text-black cursor-pointer">My Appointments</p>
                    <p onClick={logout}
                    className="hover:text-black cursor-pointer">Logout</p>
                </div>
            </div>
        </div>
        :<button  onClick={()=>navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
      }
      <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt=" "/>
        {/* ---- Mobile View ---- */}
        <div className={` ${showMenu? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 botttom-0 z-20 overflow-hidden bg-white transition-all`} >
          <div className="flex items-center justify-between px-5 py-6" >
          <div className="flex-shrink-0  flex items-center">
                <Brain onClick={()=>{
        navigate('/')
      }} className="h-6 w-6 cursor-pointer text-teal-600" />
                <span onClick={()=>{
        navigate('/')
      }} className="ml-2 text-xl  cursor-pointer font-semibold text-teal-600">MindAlign</span>
          </div>
            <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium" >
            <NavLink  onClick={()=> setShowMenu(false)} to='/' ><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink  onClick={()=> setShowMenu(false)} to='/therapists' ><p className='px-4 py-2 rounded inline-block'>ALL THERAPISTS</p></NavLink>
            <NavLink  onClick={()=> setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink  onClick={()=> setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
