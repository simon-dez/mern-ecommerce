import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import connectDB from './config/db.js';
import chalk from 'chalk';
import User from './models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { verifyToken } from './middleware/verifyToken.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Routes

//app.use('/api/auth',authRoutes);
//app.use('/api/products', productRoutes);
//app.use('/api/orders', orderRoutes);


app.use('/api/auth',authRoutes);

// Database connection

app.listen(PORT, () => {
  connectDB();
console.log(chalk.bold.bgYellow(`Server listening on port ${PORT}`));
});


