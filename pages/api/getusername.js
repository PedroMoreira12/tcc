import connectDb from "../../utils/db";
import User from "../../models/user";
import mongoose from "mongoose";

export default async function getUsernameByIdHandler(req, res) {
    try {
        await connectDb();

        const objectId = new mongoose.Types.ObjectId(req.query);

        console.log(objectId)

        const user = await User.findOne({ _id: objectId });

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