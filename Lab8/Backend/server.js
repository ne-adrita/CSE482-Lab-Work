import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app= express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
//Port checking of server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})

//DB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err)=>console.error('Connection error:', err.message))