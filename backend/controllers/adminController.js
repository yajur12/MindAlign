import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import jwt from 'jsonwebtoken';
import TherapistModel from '../models/TherapistModel.js'
import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/userModel.js';
//API
const addTherapist= async(req,res)=>{
    try{
        const {name, email, password, speciality, degree, experience, about,  fees, address, meet}=req.body;
        const imageFile=req.file
        //checking for all data to add doctor
        if(!name || !email || !speciality || !degree || !experience || !about || !fees || !address || !meet){
            return res.status(400).json({success:false,message:"All fields are required"})

        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message:"Enter a valid email"})
        }
        //validating password
        if(password.length<8){
            return res.status(400).json({success:false,message:"Password should be atleast 8 characters"})
        }
        
        //hashing password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //uploading image to cloudinary
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        
        const imageUrl=imageUpload.secure_url;
        
        
        const therapistData={
            name,
            email,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            image:imageUrl,
            date:Date.now(),
            meet
        }

        const newTherapist=new TherapistModel(therapistData);
        await newTherapist.save();
        res.status(201).json({success:true,message:"Therapist added successfully"})

    }
    catch(error){
        console.log("Error in addTherapist: ",error);
        res.status(500).json({success:false,message:error.message})
    }
}

//API for admin Login
const loginAdmin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({
                success:true,
                message:"Login successful",
                token
            })
        }
        else{
            res.json({
                success:false,
                message:"Invalid email or password"
            })
        }
    }
    catch(error){
        console.log("Error in loginAdmin: ",error);
        res.status(500).json({success:false,message:error.message})
    }
}

// API to get all therapist list for admin panel
const allTherapist = async (req, res) => {
    try{
        const therapists = await TherapistModel.find({}).select('-password')
        res.json({success:true, therapists})

    }
    catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to get all appointments list
const appointmentsAdmin = async (req, res) =>{
    try {
        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})
    }
    catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


//API for appointment cancellation
const appointmentCancel = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);

        await appointmentModel.findByIdAndUpdate(appointmentId, {
            cancelled: true,
        });

        //releasing doctor slot

        const { therapistId, slotDate, slotTime } = appointmentData;

        const therapistData = await TherapistModel.findById(therapistId);

        let slots_booked = therapistData.slots_booked;

        slots_booked[slotDate] = slots_booked[slotDate].filter(
            (slot) => slot !== slotTime
        );

        await TherapistModel.findByIdAndUpdate(therapistId, { slots_booked });
        res.json({ success: true, message: "Appointment Cancelled" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try{

        const therapists = await TherapistModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            therapists: therapists.length,
            appointments: appointments.length,
            clients: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success: true, dashData})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {addTherapist, loginAdmin, allTherapist, appointmentsAdmin, appointmentCancel, adminDashboard}