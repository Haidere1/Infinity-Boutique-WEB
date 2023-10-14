import { modelNames } from "mongoose";
import usersModel from "../models/users.js";
export const addUser= async (req,res)=>
{
const userName=req.body.userName;
const userNameInString= userName.toString();


const email=req.body.email;
const emailInString=email.toString();

const password=req.body.password;
const passwordInString=password.toString();

const userImage = req.body.userImage;
    const prUrlInString = userImage.toString();

const userContact = req.body.contact;
const prcontactInString = userContact.toString();

const newUser=new usersModel({
    userName: userNameInString,
    email: emailInString,
    password: passwordInString,
    userImage:prUrlInString,
    contact: prcontactInString

});



try {
   
    await newUser.save();
    res.json(newUser);
    
} catch (error) {
    console.log("User Not added")
}

};

export const getUsers = async (req,res)=>{
try {
    const userslist= await usersModel.find();
    res.json(userslist);
    
} catch (error) {
    console.log("Couldnt Find Any Data  ")}
};

export const deleteUser = async (req,res ) =>{

    try{
        
        await usersModel.deleteOne( req.params.id);
        res.status(200).json({message:"User Deleted"});
      
    } catch (error) {
       console.log ("delete failed new")
    }
    
    }


    export const getUser = async (req, res) => {
        try {
            const  user=req.params.name;
            console.log(user);
            const pr = await usersModel.findOne({userName:user});
            res.json(pr);
        } catch (error) {
            console.log("Couldnt Find Any Data new ");
        }
    
    }
































    //terminal write getquery for database

    export const getsometing=async(req,res)=>{

        try{

            const result=await modelNames.find()
            res.json(result);

        }

        catch{
                res.json({message:"Noting was found"})
        }

    }

    //to delete something 

    export const deletedsomething=async(req,res)=>
    {
        
        await usersModel.deleteOne(req.params.id)
    }

    // to post something

    export const postsometing=async(req,res)=>
    {
        const something=new modelNames(
            {
                Id:req.body.id,
                name:req.body.name,
            }
        )

        try{
            await something.save();
            res.json(something)
        }
        catch{
            console.log("Nothing was found here that you could delete")
        }
    }

    //to update sometihng

    export const updatesomething=async(req,res)=>{

        try {

        const update= await modelNames.findByIDAndUpdate({_id:id},
                {

                })

        } catch (error) {
            
        }
    }