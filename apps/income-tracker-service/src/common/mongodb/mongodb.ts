import mongoose from 'mongoose';

export const connection = {
  isConnected: 0,
};

export const connectionSetter = (dbConnection: typeof mongoose) => {
  if (dbConnection) {
    connection.isConnected = dbConnection.connections[0].readyState;
  }
};

const DATABASE_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

export const isDatabaseUriAvailable = () => {
  if (!DATABASE_URI)
    throw new Error('Database connection string is not defined');
};

const connectMongoDB = async () => {
  if (connection.isConnected) {
    return;
  }

  isDatabaseUriAvailable();

  try {
    const dbConnection = await mongoose.connect(DATABASE_URI as string);
    connectionSetter(dbConnection);
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
