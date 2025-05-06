import expreess from 'express'
import { therapistList , loginTherapist, appointmentsTherapist, appointmentCancel, appointmentComplete, therapistDashboard, therapistProfile, updateTherapistProfile } from '../controllers/therapistController.js'
import authTherapist from '../middleware/authTherapist.js'

const therapistRouter = expreess.Router()


therapistRouter.get('/list', therapistList)
therapistRouter.post('/login', loginTherapist)
therapistRouter.get('/appointments', authTherapist, appointmentsTherapist)
therapistRouter.post('/complete-appointment', authTherapist, appointmentComplete)
therapistRouter.post('/cancel-appointment', authTherapist, appointmentCancel)
therapistRouter.get('/dashboard', authTherapist, therapistDashboard)
therapistRouter.get('/profile', authTherapist, therapistProfile)
therapistRouter.post('/update-profile', authTherapist, updateTherapistProfile)


export default therapistRouter