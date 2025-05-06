import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Therapists from './pages/Therapists'
import Contact from './pages/Contact'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[5%] '>
      <ToastContainer />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/therapists' element={<Therapists/>} />
        <Route path='/therapists/:speciality' element={<Therapists/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/appointment/:therapistId' element={<Appointment/>} />



      </Routes>
      <Footer/>
    </div>
  )
}

export default App
