import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const currentYear = new Date().getFullYear();

const Footer = () => {
    const navigate=useNavigate();
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*-------Left Section-------*/}
            <div>
                {/* <img className='mb-5 w-40' src={assets.logo} alt="logo" /> */}

                <div className="flex-shrink-0 flex items-center">
                <Brain onClick={()=>{
        navigate('/'); scrollTo(0,0)
      }} className="h-6 w-6 cursor-pointer text-teal-600" />
                <span onClick={()=>{
        navigate('/'); scrollTo(0,0)
      }} className="ml-2 cursor-pointer text-xl font-semibold text-teal-600">MindAlign</span>
          </div>


                <p className='2-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare tortor nec est volutpat, molestie tristique eros cursus. Nam in mi dui. Mauris eleifend gravida iaculis. Cras suscipit dolor at massa facilisis faucibus. </p>
            </div>
            {/*-------Middle Section-------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*-------Right Section-------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-2 text-gray-600'>
                    <li>
                        +123-456-7890
                    </li>
                    <li>
                        MindAlign@gmail.com
                    </li>
                </ul>
            </div>
        </div>
        <div>
            {/*-------Bottom Section-------*/}
            <div>
            <hr/>
                <p className='py-5 text-sm text-center'>© {currentYear} MindAlign. All Rights Reserved</p> 
            </div>
        </div>
    </div>
  )
}

export default Footer