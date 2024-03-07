import mongoose from 'mongoose';

const connectMongoDB = async () => {
  const DATABASE_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
  if (!DATABASE_URI)
    throw new Error('Database connection string is not defined');

  try {
    await mongoose.connect(DATABASE_URI);
    console.log('Database connected successfully');

    mongoose.connection.on('connected', () => {
      console.log('Database connected');
    });
    mongoose.connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });
    mongoose.connection.on('disconnected', () => {
      console.log('Database disconnected');
    });
  } catch (err) {
    console.log('Database connection error:', err);
    throw err;
  }
};

export default connectMongoDB;
