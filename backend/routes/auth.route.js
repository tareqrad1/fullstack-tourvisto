import express from 'express';
import { register, login, logout, checkAuth } from '../controllers/auth.controller.js';
import { protectedRoute } from '../middlewares/protectedRoute.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/me', protectedRoute, checkAuth);


export default router;