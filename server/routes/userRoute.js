

import express from 'express';
import { getAllUsers, getSingleUser, userLogin, userRegister } from '../controllers/userController.js';

const userRouter=express.Router();


userRouter.post("/register",userRegister)
userRouter.post("/login",userLogin)
userRouter.get("/:id",getSingleUser)
userRouter.get("/",getAllUsers)


export default userRouter;