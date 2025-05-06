import TherapistModel from "../models/TherapistModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";


const changeAvailability = async (req, res) => {
    try {
        const {therapistId} = req.body;

        const therapistData = await TherapistModel.findById(therapistId)
        await TherapistModel.findByIdAndUpdate(therapistId, {available: !therapistData.available})
        res.json({success: true, message: 'Availability Changed'})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const therapistList = async (req, res) => {
    try{

        const therapists = await TherapistModel.find({}).select(['-password', '-email'])

        res.json({success:true, therapists})

    } catch(error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API for Therapist Login
const loginTherapist = async (req, res) => {

    try {

        const {email, password} = req.body
        const therapist = await TherapistModel.findOne({email})

        if(!therapist) {
            return res.json({success:false, message:'Invalid Credentials'})
        }

        const isMatch = await bcrypt.compare(password, therapist.password)
        
        if (isMatch) {
            const token = jwt.sign({id:therapist._id}, process.env.JWT_SECRET)
            res.json({success: true, token})
        } else {
            res.json({success:false, message:'Invalid Credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to get therapist appointments for therapist panel
const appointmentsTherapist = async (req, res) => {
    try {

        const {therapistId} = req.body
        const appointments = await appointmentModel.find({therapistId})

        res.json({success: true, appointments})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to mark appointment completed for doctor panel
const appointmentComplete = async (req, res) => {
    try {
        const {therapistId, appointmentId} = req.body
        
        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData && appointmentData.therapistId === therapistId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true})
            return res.json({success:true, message:'Appointment Completed'})
        } else {
            return res.json({success:false, message:'Mark Failed'})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to cancel appointment completed for doctor panel
const appointmentCancel = async (req, res) => {
    try {
        const {therapistId, appointmentId} = req.body
        
        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData && appointmentData.therapistId === therapistId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
            return res.json({success:true, message:'Appointment Cancelled'})
        } else {
            return res.json({success:false, message:'Cancellation Failed'})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to get dashboard data for therapist panel
const therapistDashboard = async (req, res) => {

    try {
        
        const {therapistId} = req.body
        const appointments = await appointmentModel.find({therapistId})

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let clients = []

        appointments.map((item)=> {
            if (!clients.includes(item.userId)) {
                clients.push(item.userId)
            }
        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            clients: clients.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success: true, dashData})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to get Therapist Profile data for Therapist Panel 

const therapistProfile = async (req, res) => {

    try {

        const {therapistId} = req.body
        const profileData = await TherapistModel.findById(therapistId).select('-password')

        res.json({success:true, profileData})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}



// API to update therapist profile data from Therapist Panel
const updateTherapistProfile = async (req, res) => {

    try {
        const {therapistId, fees, address, available, meet} = req.body

        await TherapistModel.findByIdAndUpdate(therapistId, {fees, address, available, meet})

        res.json({success: true, message:'Profile Updated'})


    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {
    changeAvailability, 
    therapistList, 
    loginTherapist, 
    appointmentsTherapist, 
    appointmentComplete, 
    appointmentCancel, 
    therapistDashboard,
    therapistProfile,
    updateTherapistProfile
}