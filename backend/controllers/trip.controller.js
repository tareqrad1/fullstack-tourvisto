import cloudinary from "../config/connectCloudinary.js";
import Trip from "../models/trip.model.js";

export const createTrips = async (req, res) => {
    const { title, country, duration, groupType, travelStyle, interest, budgetEstimate, description, price, availableSeats, images, location } = req.body;
    try {
        if(!title || !country || !duration || !groupType || !travelStyle || !interest || !budgetEstimate || !description || !price || !availableSeats || !location) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if(description.length < 30) {
            return res.status(400).json({ error: "Description must be at least 30 words long" });
        }
        if(images.length < 2) {
            return res.status(400).json({ error: "At least two image is required" });
        }
        let uploadImages = [];
        if(images && images.length > 0) {
            for (let i =0; i < images.length; i++) {
                const uploadResponse = await cloudinary.uploader.upload(images[i], {
                    folder: 'trips',
                });
                uploadImages.push(uploadResponse.secure_url);
            }
        }
        const trip = new Trip({
            title,
            country,
            duration,
            groupType,
            travelStyle,
            interest,
            budgetEstimate,
            description,
            price,
            availableSeats,
            images: uploadImages,
            location: {
                type: 'Point',
                coordinates: [location.coordinates[0], location.coordinates[1]]
            }
        });
        await trip.save();
        res.status(201).json({
            message: "Trip created successfully",
            trip
        });
    } catch (error) {
        console.error("Error creating trip:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
export const getAllTrips = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;
    try {
        const trips = await Trip.find({}).skip(skip).limit(limit).sort({ createdAt: -1 });
        if(trips.length === 0) {
            return res.status(404).json({ error: "No trips found" });
        }
        res.status(200).json({
            message: 'Trips fetched successfully',
            trips,
            currentPage: page,
            total: Math.ceil(await Trip.countDocuments() / limit)
        })
    } catch (error) {
        console.error("Error fetching trips:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export const getOneTrip = async (req, res) => {
    const { id } = req.params;
    try {
        const trip = await Trip.findById(id).lean();
        if(!trip) {
            return res.status(404).json({ error: "Trip not found" });
        }
        res.status(200).json({ trip });
    } catch (error) {
        console.error("Error fetching one trip:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export const deleteTrip = async (req, res) => {
    const { id } = req.params;
    try {
        const trip = await Trip.findById(id);
        if(!trip) {
            return res.status(404).json({ error: "Trip not found" });
        }
        if(trip.images && trip.images.length > 0) {
            for(let i =0; i < trip.images.length; i++) {
                let imageId = trip.images[i].split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(`trips/${imageId}`);
            }
        }
        await Trip.findByIdAndDelete(trip._id);
        res.status(200).json({ message: "Trip deleted successfully" });
    } catch (error) {
        console.error("Error deleting trip:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export const updateTrip = async (req, res) => {
    const { id } = req.params;
    const { title, country, duration, groupType, travelStyle, interest, budgetEstimate, description, price, availableSeats, images, location } = req.body;
    try {
        const trip = await Trip.findById(id);
        if(!trip) {
            return res.status(404).json({ error: "Trip not found" });
        }
        let uploadImages = [];
        if(images && images.length > 0) {
            for(let i =0; i < trip.images.length; i++) {
                let imageId = trip.images[i].split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(`trips/${imageId}`);
            }
            for (let i = 0; i < images.length; i++) {
                const uploadResponse = await cloudinary.uploader.upload(images[i], {
                    folder: 'trips',
                });
                uploadImages.push(uploadResponse.secure_url);
            };
        };
        trip.title = title || trip.title;
        trip.country = country || trip.country;
        trip.duration = duration || trip.duration;
        trip.groupType = groupType || trip.groupType;
        trip.travelStyle = travelStyle || trip.travelStyle;
        trip.interest = interest || trip.interest;
        trip.budgetEstimate = budgetEstimate || trip.budgetEstimate;
        trip.description = description || trip.description;
        trip.price = price || trip.price;
        trip.availableSeats = availableSeats || trip.availableSeats;
        trip.images = uploadImages.length > 0 ? uploadImages : trip.images;
        trip.location = location && location.coordinates ? {
            type: 'Point',
            coordinates: [location.coordinates[0], location.coordinates[1]]
        } : trip.location;
        await trip.save();
        res.status(200).json({
            message: "Trip updated successfully",
            trip
        });
    } catch (error) {
        console.error("Error updating trip:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}