import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import createError from '../utils/appError.js';
import dotenv from 'dotenv';
dotenv.config();

// REGISTER USER
export const signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return next(createError(400, 'User already exists'));
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 15);
        const newUser = await User.create({ ...req.body, password: hashedPassword });
        // Assign JWT ( json web token ) to user
        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '15d' });
        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            }
        });
    } catch (error) {
        next(error);
    }
};

// LOG-IN USER
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return next(createError(404, 'User not found'));
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(createError(400, 'Invalid credentials'));
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '15d' });
        res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error)
    }
};
