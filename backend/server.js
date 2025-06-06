import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/connectDB.js';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 5000;

//routes
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import tripRoutes from './routes/trip.route.js';
import bookingRoutes from './routes/booking.route.js';
import paymentRoutes from './routes/payment.route.js';

//middlewares
app.use(cookieParser());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
}));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/payments', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
    connectDB();
});