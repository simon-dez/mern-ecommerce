
import express from 'express';
import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail } from '../mailtrap/emails.js';
import { sendWelcomeEmail } from '../mailtrap/emails.js';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '../mailtrap/emails.js';
import { sendResetSuccessEmail } from '../mailtrap/emails.js';


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
};

// Verify email
export const verifyEmail = async (req, res) => {

    //1 2 3 4 5 6
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpireAt: { $gt: Date.now() }
        })
        if (!user) {
           return res.status(400).json({success:false, message:'Invalid or expired verification code'});
        }
user.isVerified = true;
user.verificationToken = undefined;
user.verificationTokenExpireAt = undefined;
await user.save();

await sendWelcomeEmail(user.email, user.name);

res.status(200).json({success:true, 
    message:'Email verified successfully', 
    user:{...user._doc,
         password: undefined,
        }
        });
    } catch (error) {
        console.log("error in verifying Email",error);
        res.status(500).json({success:false, message:"Server error"});
    }

}



// Login user
export const login = async (req, res) => {
    const {email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
 if (!isPasswordValid) {
     return res.status(400).json({ success: false, message: 'Invalid credentials' });

    } 
    generateTokenAndSetCookie(res,user._id);
    user.lastLogin = new Date();
    await user.save();
    res.status(200).json({ success: true, 
        message: 'User logged in successfully', 
        user:{
            ...user._doc, 
            password: undefined,
        },
         });
    
} catch (error) {
    console.log("error in login", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// Logout user

export const logout = async (req, res) => {
   res.clearCookie('token');
   res.status(200).json({success:true, message:'User logged out successfully'});
};

// Forgot password

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
try {
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({success:false, message:'User not found'});
    }

    // Generate reset token
const resetToken = crypto.randomBytes(20).toString('hex');
const resetTokenExpireAt = Date.now() + 1 * 60 * 1000;//1 hour
user.resetPasswordToken = resetToken;
user.resetPasswordExpireAt = resetTokenExpireAt;
await user.save();

// Send email

await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
res.status(200).json({success:true, message:'Password reset email sent successfully'});
} catch (error) {
   console.log("error in forgot password",error);
    res.status(400).json({success:false, message:error.message}); 
}


}


// Reset password

export const resetPassword = async (req, res) => {
    
    try {
        const { token } = req.params;
        const { password } = req.body;
        
        
        const user  = await User.findOne({
            resetPasswordToken: token,
            resetPasswordTokenExpireAt: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({success:false, message:'Invalid or expired reset token'});
        }
        const hashedPassword = await bcryptjs.hash(password, 12);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpireAt = undefined;
        await user.save();
       await sendResetSuccessEmail(user.email);
        res.status(200).json({success:true, message:'Password reset successfully'});
    }

    catch (error) {
        console.log("error in reset password",error);
        res.status(400).json({success:false, message:error.message});
    }
}

// Check if user is authenticated

export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(400).json({success:false, message:'User not found'});
        }
        res.status(200).json({success:true, user});
    } catch (error) {
        console.log("error in check auth",error);

}
}
