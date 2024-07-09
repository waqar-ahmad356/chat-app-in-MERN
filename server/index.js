import express from 'express'
import connectDb from './db/db.js';
import { WebSocketServer } from 'ws';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cors from "cors"

const app=express();
connectDb();
app.use(cors());

const port=8080;
app.use(express.json());

const server=app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})
//api end point
app.use("/api/user",userRouter)


app.get('/',(req,res)=>{
    res.send("Chat App Server")

})
const io=new WebSocketServer({server})
io.on("connection",(ws)=>{
    console.log("New connection connected")

    ws.on("message",(data)=>{
        console.log("data from client %s",data)
        ws.send("Thanks buddy")
    });
    ws.on('disconnect', () => {
        console.log('Client disconnected');
      });
})



