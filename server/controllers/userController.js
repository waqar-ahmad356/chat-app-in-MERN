import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

//create token
const createToken=(_id)=>{
    return jwt.sign({_id},process.env.JWT_KEY);
}
//user registration
const userRegister=async(req,res)=>{
   const {name,email,password}=req.body;
   try {
    const user=await userModel.findOne({email})
   if(user){
    return res.status(400).send("User Already regsitered")
   }
   if(!validator.isEmail(email)){
    return res.status(400).send("Invalid Email")

   }
   if(!validator.isStrongPassword(password)){
    return res.status(400).send("Password is too weak")}

    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    const newUser=new userModel({name,email,password:hashPassword})
    await newUser.save()
    const token=createToken(newUser._id)
    res.status(200).send({message:"User Registered Successfully",token})

    
   } catch (error) {
    res.status(500).send("Internal Server Error")
    
   }
   
    



}
//user login 

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User Not Found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const token = createToken(user._id);
        res.status(200).json({ message: "User Logged In Successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// get single user

const getSingleUser=async(req,res)=>{
    try {
        const user=await userModel.findById(req.params.id)
        if(!user){
            return res.status(400).send("User Not Found")}
            res.status(200).send(user)
            } catch (error) {
                res.status(500).send("Internal Server Error")}
}
//get all users
const getAllUsers=async(req,res)=>{
    try {
        const user=await userModel.find()
        if(!user){
            return res.status(400).send("User Not Found")}
            res.status(200).send(user)
            } catch (error) {
                res.status(500).send("Internal Server Error")}
    }


export {userRegister,userLogin,getSingleUser,getAllUsers}