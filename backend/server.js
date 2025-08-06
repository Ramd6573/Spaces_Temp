import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({path: 'config.env'});

let app= express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 3001; 
console.log(PORT)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 