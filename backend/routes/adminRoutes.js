import express from "express";

import {addTherapist,allTherapist,loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from "../controllers/adminController.js";

import upload from "../middleware/multer.js";
import authAdmin from "../middleware/authAdmin.js";
import { changeAvailability } from "../controllers/therapistController.js";

const adminRouter = express.Router();

adminRouter.post('/add-therapist',authAdmin,upload.single('image'),addTherapist)
adminRouter.post('/login',loginAdmin);
adminRouter.post('/all-therapist', authAdmin,allTherapist);
adminRouter.post('/change-availability', authAdmin, changeAvailability);
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

export default adminRouter;