import express from 'express';
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { cancelBooking, getBookingById, getLastBooking, getMyBooking } from '../controllers/booking.controller.js';
import { adminRoles } from '../middlewares/roles.js';


const router = express.Router();

router.route('/')
            .get(protectedRoute, getMyBooking);

router.get('/last', protectedRoute, adminRoles, getLastBooking);

router.route('/:bookingId')
                        .get(protectedRoute, getBookingById)
                        .post(protectedRoute, cancelBooking);

export default router;