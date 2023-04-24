import bcrypt from 'bcrypt'
import User from "../../models/user"
import connectDb from "../../utils/db"
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

export default async function createUserHandler(req, res) {
    try {
        await connectDb()
        const {name, username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            name: name,
            username: username,
            password: hashedPassword
        });
        await user.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            })
        );

        res.status(201).json({user, message: "User created successfully"});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({message: "Username already exists"});
        } else {
            console.log(error);
            res.status(500).json({message: "Internal server error"});
        }
    }
}