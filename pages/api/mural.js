import Post from "../../models/post";
import connectDb from "../../utils/db";
const mongoose = require('mongoose');

export default async function createPostHandler(req, res) {
    console.log(req.body);
    try {
        await connectDb();
        const { post_title, post_body, user_id } = req.body;

        const post = new Post({
            title: post_title,
            body: post_body,
            user: new mongoose.Types.ObjectId(user_id)
        });
        await post.save();

        res.status(201).json({ post, message: "Post created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}