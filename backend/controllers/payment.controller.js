import Booking from "../models/booking.model.js";
import { stripe } from "../config/connectStripe.js";
import dotenv from 'dotenv';
dotenv.config();

export const createCheckoutSession = async (req, res) => {
    const { tripId, tripTitle, tripSubTitle, image, tripPrice, guests } = req.body;
    if (!tripId || !tripTitle || !tripSubTitle || !tripPrice) return res.status(400).json({ error: 'Missing required fields' });
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: tripTitle,
                        description: tripSubTitle,
                        images: [image],
                    },
                    unit_amount: tripPrice * 100, // Convert to cents
                },
                quantity: guests || 1,
            }],
            success_url: `${process.env.CLIENT_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
            metadata: {
                tripId,
                guests: guests || 1,
            },
        });
        return res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const checkoutSuccess = async (req, res) => {
    const { sessionId } = req.body;
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }
        if(session.payment_status !== 'paid') {
            return res.status(400).json({ error: 'Payment not completed' });
        }
        const existingBooking = await Booking.findOne({
            stripeSessionId: sessionId,
        });
        if (existingBooking) {
            return res.status(400).json({ error: 'Booking already exists' });
        }
        const booking = new Booking({
            userId: req.user._id,
            trip: session.metadata.tripId,
            guests: session.metadata.guests || 1,
            totalPrice: session.amount_total / 100, // Convert back to dollars
            status: 'confirmed',
            paymentStatus: 'completed',
            stripeSessionId: sessionId,
        });
        await booking.save();
        return res.status(200).json({ message: 'Checkout successful', booking });
    } catch (error) {
        console.error('Error handling checkout success:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};