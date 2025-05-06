import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'


export const TherapistContext=createContext();

const TherapistContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken, setDToken] = useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)
    const [profileData, setProfileData] = useState(false)


    const getAppointments = async () => {
        try {
            console.log('dToken:', dToken); // Check its value before making the request

            const { data } = await axios.get(backendUrl + '/api/therapist/appointments', {
                headers: {
                    token: dToken
                }
              });
            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments)

            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    } 


    const completeAppointment = async (appointmentId) => {

        try {

            const {data} = await axios.post(backendUrl + '/api/therapist/complete-appointment', {appointmentId}, {headers: {
                token: dToken
            }})
            if(data.success) {
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.error)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }



    const cancelAppointment = async (appointmentId) => {

        try {

            const {data} = await axios.post(backendUrl + '/api/therapist/cancel-appointment', {appointmentId}, {headers: {
                token: dToken
            }})
            if(data.success) {
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.error)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    

    const getDashData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/therapist/dashboard', {headers: {
                token: dToken
            }})

            if(data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const getProfileData = async () => {

        try {

            const {data} = await axios.get(backendUrl + '/api/therapist/profile', {headers: {
                token: dToken
            }})

            if(data.success) {
                setProfileData(data.profileData)
                console.log(data.profileData)

            }
        } catch(error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value={
        dToken, setDToken,
        backendUrl,
        appointments, setAppointments,
        getAppointments,
        completeAppointment, cancelAppointment,
        dashData, setDashData, getDashData,
        profileData, setProfileData, getProfileData

    }


    return(
        <TherapistContext.Provider value={value}>
            {props.children}
        </TherapistContext.Provider>
    )
}
export default TherapistContextProvider;