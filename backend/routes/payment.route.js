import express from 'express';
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { checkoutSuccess, createCheckoutSession } from '../controllers/payment.controller.js';


const router = express.Router();

router.post('/create-checkout-session', protectedRoute, createCheckoutSession);
router.post('/checkout-success', protectedRoute, checkoutSuccess);


export default router;