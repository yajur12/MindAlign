import express from 'express';
import jwt from 'jsonwebtoken';

//user authentication middleware

const authUser=async (req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token){
            return res.status(401).json({success:false,message:"Not authorised login again"})
        }
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=decoded_token.id;
        next();

    }
    catch(error){
        console.log(error);
        res.status(401).json({success:false,message:error.message})
    }
}
export default authUser;