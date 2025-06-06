import cloudinary from '../config/connectCloudinary.js';
import User from '../models/user.model.js'
import bcrypt from 'bcrypt';
import { validateSchema } from '../utils/validateSchema.js';
import { generateTokenAndSetCookie } from '../lib/generateTokenAndSetCookie.js'; 

export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    let { avatar } = req.body;
    const { error } = validateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(302).json({ error: 'User already exists' });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        if(avatar) {
            const uploadResponse = await cloudinary.uploader.upload(avatar);
            avatar = uploadResponse.secure_url;
        }else {
            avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
        }
        const user = new User({
            name,
            email,
            password: hashedPassword,
            avatar,
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user: {
            ...user._doc,
            password: undefined,
        }});
    } catch (error) {
        console.log('Error in register:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ error: 'Email or Password is incorrect' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(404).json({ error: 'Email or Password is incorrect' });
        };
        generateTokenAndSetCookie(user._id, res);
        user.lastActiveAt = new Date();
        await user.save();
        res.status(200).json({ message: 'Login successfully', user: {
            ...user._doc,
            password: undefined,
        }});
    } catch (error) {
        console.log('Error in login:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
export const logout = async (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({ message: 'Logout successfully' });
    } catch (error) {
        console.log('Error in logout:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.log('Error in checkAuth:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
