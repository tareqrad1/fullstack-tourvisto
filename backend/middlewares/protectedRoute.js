import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model.js';
dotenv.config();

export const protectedRoute = async(req, res, next) => {
    const token = req.cookies.token;
    if(!token){ 
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        const user = await User.findById(decoded.userId).select('-password');
        if(!user) {
            return res.status(404).json({ error: 'User not found' });
        };
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in protectedRoute middleware:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}