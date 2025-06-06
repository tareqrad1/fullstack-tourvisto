import express from 'express';
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { cancelBooking, createBooking, getBookingById, getMyBooking } from '../controllers/booking.controller.js';

const router = express.Router();

router.route('/')
            .get(protectedRoute, getMyBooking)
            .post(protectedRoute, createBooking);

router.route('/:bookingId')
                        .get(protectedRoute, getBookingById)
                        .post(protectedRoute, cancelBooking);

export default router;