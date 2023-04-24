import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req, res) {
    // Get the token from the cookie
    const { token } = cookie.parse(req.headers.cookie || '');

    if (!token) {
        // If no token is present, return a 401 Unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    try {
        // Verify the token using the JWT_SECRET from your .env file
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Extract the user ID from the decoded token
        const userId = decodedToken.id;

        // If the token is valid, return a 200 Authorized response with the user ID
        res.status(200).json({ message: 'Authorized', userId });
    } catch (error) {
        // If the token is invalid or has expired, return a 401 Unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
    }
}