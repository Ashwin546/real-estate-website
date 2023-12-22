const generateToken = require('../config/generatetoken');
const User=require('../models/UserSchema');
const registerUser=async (req,res)=>{
    try{
       const {name,email,password}=req.body;
        if(!name || !email|| !password){
            res.status(400);
            throw new Error('please enter all details');
        }
        const userExist=await User.findOne({email})
        if(userExist){
            throw new Error('user already exists');
        }
        const user=await User.create({
            name,email,password
        });
        res.status(201).json({
            message:'registration successful'
        })
    }
    catch(error){
        res.status(400).json({
            error,
            message:'unsuccesful registration'
        })
    }
}
const authUser=async (req,res)=>{
    try{
        
        const {email,password}=req.body;
        
        const user= await User.findOne({email});
        const token=generateToken(user._id);
        const options = {
            expires: new Date(Date.now() + 10* 24 * 60 * 60 * 1000),
            httpOnly: true,
        };
        if(user && (await user.matchPassword(password))){
            return res.status(201).cookie("token",token,options).json({
                    "message":"success full login" , 
                     token,

                });
        }
        else{
            res.status(401);
            throw new Error('Invalid email or password');
        }
    }
    catch(error){
        res.status(401).json({
            message:error.message,
            
        })
    }

   
}
module.exports={registerUser,authUser}