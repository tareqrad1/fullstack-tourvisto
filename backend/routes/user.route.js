import express from 'express';
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { adminRoles } from '../middlewares/roles.js';
import { getAllUsers, getActiveUsersToday, getLatestUsers, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectedRoute, adminRoles, getAllUsers);
router.get('/active', protectedRoute, adminRoles, getActiveUsersToday);
router.get('/latest', protectedRoute, adminRoles, getLatestUsers);

router.delete('/delete/:id', protectedRoute, adminRoles, deleteUser);



export default router;