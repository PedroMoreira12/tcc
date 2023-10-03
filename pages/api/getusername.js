import connectDb from "../../utils/db";
import User from "../../models/user";

export default async function getUsernameByIdHandler(req, res) {
    try {
        await connectDb();

        const userId = req.query.objectId;

        const ObjectId = require('mongodb').ObjectId;


        // Use Mongoose's findById method to find a user by _id
        const user = await User.findById(new ObjectId(userId));

        if (!user) {
            // If the user is not found, return a 404 status and message
            return res.status(404).json({ message: "User not found" });
        }

        // Return the username of the user
        res.status(200).json({ username: user.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}