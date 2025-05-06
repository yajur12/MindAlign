import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom';
import { Brain } from 'lucide-react';
import { TherapistContext } from '../context/TherapistContext';
const Navbar = () => {
    const {token,setToken} = useContext(AdminContext);
    const {dToken, setDToken} = useContext(TherapistContext)
    const navigate=useNavigate();
    
    const logout=()=>{
            navigate('/');
            token && setToken('');
            token && localStorage.removeItem('token');
            dToken && setDToken('')
            dToken && localStorage.removeItem('dToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
          <div className='flex-shrink-0  flex flex-col items-start'>
        <div className="flex items-center">
                <Brain onClick={()=>{
        navigate('/')
      }} className="h-6 w-6 cursor-pointer text-teal-600" />
                <span onClick={()=>{
        navigate('/')
      }} className="ml-2 text-xl  cursor-pointer font-semibold text-teal-600">MindAlign</span>
      </div>
      <span className='ml-9 -mt-1 cursor-pointer text-teal-600'>Dashboard</span>
          </div>
            {/* <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="logo"/> */}
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{token? 'Admin' :'Therapist'}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div> 
  )
}

export default Navbar