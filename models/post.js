import mongoose from "mongoose";

const Post = mongoose.models.Post || mongoose.model('Post', new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}));

export default Post;