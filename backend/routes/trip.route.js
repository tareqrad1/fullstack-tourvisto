import express from 'express';
import { getAllTrips, createTrips, getOneTrip, deleteTrip, updateTrip } from '../controllers/trip.controller.js';
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { adminRoles } from '../middlewares/roles.js';

const router = express.Router();

router.route('/')
                .get(protectedRoute, getAllTrips)
                .post(protectedRoute, adminRoles, createTrips);

router.route('/:id')
                    .get(protectedRoute, getOneTrip)
                    .delete(protectedRoute, adminRoles, deleteTrip)
                    .patch(protectedRoute, adminRoles, updateTrip);

export default router;