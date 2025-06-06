import Booking from "../models/booking.model.js";
import User from "../models/user.model.js";
import Trip from "../models/trip.model.js";

// export const createBooking =async (req, res) => {
//     const { tripId, guests } = req.body;
//     if(!tripId || !guests) {
//         return res.status(400).json({ error: "Trip ID and guests are required" });
//     }
//     try {
//         const user = await User.findById(req.user._id);
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         const trip = await Trip.findById(tripId);
//         if(trip._id.toString() !== tripId) {
//             return res.status(404).json({ error: "Trip not found" });
//         }
//         if(guests > trip.availableSeats) {
//             return res.status(400).json({ error: "Not enough available seats for the requested number of guests" });
//         }
//         trip.availableSeats -= guests;
//         await trip.save();
//         const booking = new Booking({
//             userId: user._id,
//             trip: tripId,
//             guests: guests,
//             status: "confirmed",
//             paymentStatus: "pending",
//         });
//         await booking.save();
//         res.status(201).json({ message: "Booking created successfully", booking });
//     } catch (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
export const getMyBooking = async (req, res) => {
    const userId = req.user._id.toString();
    try {
        const bookings = await Booking.find({
            userId: userId,
            status: {
                $ne: 'cancelled'
            }
        });
        if(!bookings || bookings.length === 0) {
            return res.status(404).json({ error: "No bookings found" });
        }
        res.status(200).json({ message: "Bookings fetched successfully", bookings });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const getBookingById = async (req, res) => {
    const { bookingId } = req.params;
    try {
        const booking = await Booking.findById(bookingId).lean();
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json({ message: "Booking fetched successfully", booking });
    } catch (error) {
        console.error("Error fetching booking by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const cancelBooking = async (req, res) => {
    const { bookingId } = req.params;
    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        if(booking.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ error: "You are not authorized to cancel this booking" });
        }
        booking.status = "cancelled";
        await booking.save();
        res.status(200).json({ message: "Booking cancelled successfully", booking });
    } catch (error) {
        console.error("Error cancelling booking:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};