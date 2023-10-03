import connectDb from "../../utils/db";
import Post from "../../models/post";

export default async function getAllPostsHandler(req, res) {
    try {
        await connectDb();

        const posts = await Post.find({}, 'title body user'); // Retrieve only title and body fields

        res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}