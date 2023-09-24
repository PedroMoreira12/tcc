import User from "../../models/user";
import connectDb from "../../utils/db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

export default async function loginHandler(req, res) {
    try {
        await connectDb();
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', token, {
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            })
        );

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}