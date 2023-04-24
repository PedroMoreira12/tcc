import mongoose from "mongoose"

const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
    name: String,
    username: { type: String, unique: true },
    password: String
}));

export default User