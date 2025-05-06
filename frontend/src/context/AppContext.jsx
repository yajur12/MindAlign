import { createContext, useState , useEffect} from "react";
import { therapists } from "../assets/assets_frontend/assets";
export const AppContext = createContext();
import axios from 'axios'
import {toast} from 'react-toastify'
// import mongoose from "mongoose";



const AppContextProvider = (props ) => {

  const currencySymbol ='₹'
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [therapists, setTherapists] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
  const [userData,setUserData] = useState(false)
    

  const getTherapistsData = async () => {
    try{
      const {data} = await axios.get(backendUrl + '/api/therapist/list');
      if(data.success) {
        setTherapists(data.therapists)
      } else {
        toast.error(data.message)
      }

    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const loadUserProfileData=async()=>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
      if(data.success){
        setUserData(data.userData)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }

  const value={
    therapists,
    getTherapistsData,
    currencySymbol,
    token,setToken,
    backendUrl,
    setUserData,
    userData,
    loadUserProfileData
}

  useEffect(()=>{
    getTherapistsData();
  })

  useEffect(()=>{
    if(token){
      loadUserProfileData()
    } else{
      setUserData(false)
    }
  },[token])

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;