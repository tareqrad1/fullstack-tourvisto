import Booking from "../models/booking.model.js";

export const getMyBooking = async (req, res) => {
    const userId = req.user._id.toString();
    try {
        const bookings = await Booking.find({
            userId: userId,
            status: {
                $ne: 'cancelled'
            }
        }).populate('userId').populate('trip').lean();
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
export const getLastBooking = async (req, res) => {
    try {
        const lastBooking = await Booking.find({ }).limit(5).sort({ createdAt: -1 }).populate('trip');
        if (!lastBooking) {
            return res.status(404).json({ error: "No bookings found" });
        }
        res.status(200).json({ message: "Last booking fetched successfully", lastBooking });
    } catch (error) {
        console.error("Error cancelling booking:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}