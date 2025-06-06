import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    trip: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
        required: true
    },
    guests: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["confirmed", "cancelled"],
        default: "confirmed"
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },
    stripeSessionId: {
        type: String,
        unique: true,
    }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;