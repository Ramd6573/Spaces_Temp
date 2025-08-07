import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRouter from './routes/user.js';
import spaceRouter from './routes/space.js';
dotenv.config({path: 'config.env'});

let app= express();
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);  
app.use('/api/spaces', spaceRouter);
  


const PORT=process.env.PORT || 3001; 
console.log(PORT)
app.listen(PORT,()=>{ 
    connectDB();
    console.log(`Server is running on port ${PORT}`);
}) 