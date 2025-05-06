import mongoose from "mongoose";
const appointmentSchema = mongoose.Schema(
    {
        userId:{type:String,required:true},
        therapistId:{type:String,required:true},
        slotDate:{type:String,required:true},
        slotTime:{type:String,required:true},
        userData:{type:Object,required:true},
        therapistData:{type:Object,required:true},
        amount:{type:Number,required:true},
        date:{type:Number,required:true},
        cancelled:{type:Boolean,default:false},
        payment:{type:Boolean,default:false},
        isCompleted:{type:Boolean,default:false},
        meet:{type:String, default:""}
    }
)

const appointmentModel=mongoose.models.appointment || mongoose.model('appointments',appointmentSchema)
export default appointmentModel;