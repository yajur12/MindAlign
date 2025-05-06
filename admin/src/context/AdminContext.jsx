import { createContext,useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export const AdminContext=createContext();

const AdminContextProvider = (props) => {
    const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
    const [therapists, setTherapists] = useState([])
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    
    const getAllTherapists = async() =>{
        try{

            const {data} = await axios.post(backendUrl + '/api/admin/all-therapist', {}, {headers: {token}})
            if(data.success) {
                setTherapists(data.therapists);
                console.log(data.therapists);
            } else{
                toast.error(data.message)
            }
        }   
        catch (error){
            toast.error(error.message)
        }
    }

    const changeAvailability = async (therapistId) => {

        try {
            const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {therapistId}, {headers: {token}})
            if(data.success) {
                toast.success(data.message)
                getAllTherapists()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getAllAppointments = async() => {
        try {
            const { data } = await axios.get(backendUrl+'/api/admin/appointments', {headers: {token}})

            if(data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments);
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {

        try {

            const {data} = await axios.post(backendUrl+'/api/admin/cancel-appointment',{appointmentId}, {headers:{token}})

            if(data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            } 
        }
        catch (error) {
            toast.error(error.message)
        }
    }


    const getDashData = async () => {
        try {

            const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers: {token}})

            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value={
        token,
        setToken, 
        backendUrl,
        therapists,
        getAllTherapists,
        changeAvailability,
        appointments, 
        setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData,
        getDashData
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;