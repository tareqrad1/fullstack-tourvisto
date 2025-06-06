import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        default: []
    }],
    lastActiveAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;