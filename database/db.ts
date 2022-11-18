import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect(process.env.MONGO_URL || '');
    console.log('Database is connected 🚀');
}