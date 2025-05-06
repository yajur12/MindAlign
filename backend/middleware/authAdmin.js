import express from 'express';
import jwt from 'jsonwebtoken';

//admin authentication middleware

const authAdmin=async (req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token){
            return res.status(401).json({success:false,message:"Not authorised login again"})
        }
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded_token!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(401).json({success:false,message:"Not authorised login again"})
        }
        next();

    }
    catch(error){
        console.log(error);
        res.status(401).json({success:false,message:error.message})
    }
}
export default authAdmin;