import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// 1. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 2. ROUTES
app.use('/api/auth', authRoutes);

// 3. MONGO DB CONNECTION
const PORT = process.env.PORT || 6001;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            authSource: 'admin',
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASSWORD,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
connectToDatabase();

// 4. GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    res.status(err.statusCode).json({ message: err.message });
});

// 5. START SERVER
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});