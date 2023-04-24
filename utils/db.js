import mongoose from 'mongoose';

let conn

const connectDb = async () => {

    if (!conn) {
        try {
            conn = await mongoose.connect('mongodb://localhost:27017/contraGolpes', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log(`MongoDB connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(`Error connecting to MongoDB: ${error.message}`);
        }
    }
};

export default connectDb;