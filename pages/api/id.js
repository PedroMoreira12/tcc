import User from "../../models/user";
import connectDb from "../../utils/db";

export default async function idHandler(req, res) {
    try {
        await connectDb();
        const userId = req.query.id;
        const ObjectId = require('mongodb').ObjectId;

        // Use Mongoose's findById method to find a user by _id
        const user = await User.findById(new ObjectId(userId));

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ username: user.username });
    } catch (error) {
        console.error(error);

        // Respond with a 500 status and an error message
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}