import usersModel from "../models/users.js"

import jwt from "jsonwebtoken" 

export const finduser =async(req,res)=>{
    const user = await usersModel.findOne({userName:req.body.userName,password:req.body.password })

    if(user)
    {
        const token=jwt.sign({
            email:req.body.email,
            userName:req.body.userName
        },'userisin')
        return res.json({status:"ok hai",user:token})
    }
    else{
        return res.json({status:'error',user:false})
    }
}   