
import express from 'express';
import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail } from '../mailtrap/emails.js';


// Register new user
export const signup = async (req, res) => {
    const { name, email, password } = req.body;
   try {
    if (!name || !email || !password) {
        throw new Error('Please fill all fields');
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
       return res.status(400).json({ error: 'User already exists' });
   }
   const hashedPassword = await bcryptjs.hash(password, 12);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
    
    const user = new User({ name, email, password: hashedPassword ,verificationToken,verificationTokenExpireAt: Date.now() + 24 * 60 * 1000})
    await user.save();

    //JWT
    generateTokenAndSetCookie(res,user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({ success: true, message: 'User created successfully', user:{...user._doc, password: undefined} });
}catch (error) {
    res.status(400).json({ success: false, message: error.message });
   }
}


// Login user
export const login = async (req, res) => {
    res.send('Login');
}

// Logout user

export const logout = async (req, res) => {
    res.send('Logout');
}

