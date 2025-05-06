import jwt from 'jsonwebtoken';

//therapist authentication middleware

const authTherapist=async (req,res,next)=>{
    try{
        console.log(req.headers);
        const {token}=req.headers;
        if(!token){
            return res.status(401).json({success:false,message:"Not authorised login again"})
        }
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET);
        req.body.therapistId=decoded_token.id;
        next();

    }
    catch(error){
        console.log(error);
        res.status(401).json({success:false,message:error.message})
    }
}

export default authTherapist;