import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    duration: { //number of days
        type: Number,
        required: true,
    },
    groupType: {
        type: String,
        required: true,
    },
    travelStyle: {
        type: String,
        required: true,
    },
    interest: {
        type: String,
        required: true,
    },
    budgetEstimate: {
        type: String,
        required: true,
        default: 'Medium'
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    availableSeats: {
        type: Number,
        required: true,
        min: 1
    },
    images: {
        type: [String],
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [lng, lat]
            required: true
        },
    }
}, { timestamps: true });

tripSchema.index({ location: '2dsphere' }); // Create a 2dsphere index for geospatial queries

const Trip = mongoose.model('Trip', tripSchema);
export default Trip;