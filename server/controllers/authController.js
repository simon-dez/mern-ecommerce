
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register new user
export const register= async (req, res) => {
try{
    const {username,password} = req.body;
    const user = new User({username,password});
    await user.save();
    res.status(201).json({message: 'User registered successfully'});
}
catch(error){   
    res.status(400).json({error: error.message});
} 
};  


// Login user

export const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username   });
        if(!user) return res.status(400).json({error: 'User not found'});
const validPassword = await user.comparePassword(password);
if(!validPassword) return res.status(400).json({error: 'Invalid password'});
const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
res.json({ token });
    }
    catch(error){
        res.status(400).json({message: error.message});
    }   
};
