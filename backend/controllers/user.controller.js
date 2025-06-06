import cloudinary from "../config/connectCloudinary.js";
import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;
    try {
        const users = await User.find({}, '-password -__v').skip(skip).limit(limit).sort({ createdAt: -1 });
        if (users.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        res.status(200).json({ users,
            totalUser: Math.ceil(await User.countDocuments()),
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
export const getActiveUsersToday = async (req, res) => {
    try {
        const startTody = new Date();
        startTody.setHours(0, 0, 0, 0);
        const activeUsers = await User.find({
            lastActiveAt: {
                $gte: startTody,
            }
        });
        if (activeUsers.length === 0) {
            return res.status(404).json({ error: 'No active users today' });
        }
        res.status(200).json({
            count: activeUsers.length,
            users: activeUsers,
        })
    } catch (error) {
        console.error('Error fetching active users today:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
export const getLatestUsers = async (req, res) => {
    try {
        const latestUsers = await User.find({
            _id: {
                $ne: req.user._id
            },
        }, '-password -__v').sort({ createdAt: -1 }).limit(4);
        if (latestUsers.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        res.status(200).json({ latestUsers });
    } catch (error) {
        console.error('Error fetching latest users:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if(user && user.avatar) {
            const publicId = user.avatar.split('/').pop().split('.')[0];
            cloudinary.uploader.destroy(publicId);
        }
        await User.findByIdAndDelete(user._id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}