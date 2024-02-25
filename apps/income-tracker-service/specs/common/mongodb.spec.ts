import { after } from 'node:test';
import connectMongoDB from '../../src/common/mongodb/mongodb';
import mongoose from 'mongoose';

// jest.mock('mongoose');

describe('Should test MongoDB connection', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should connect to MongoDB successfully', async () => {
    const mockConnection = jest.spyOn(mongoose, 'connect');
    mockConnection.mockImplementation();
    await connectMongoDB();
    expect(mockConnection).toHaveBeenCalledTimes(1);
  });

  it('Should throw error inside the catch', async () => {
    const mockConnection = jest.spyOn(mongoose, 'connect');
    mockConnection.mockImplementation(() =>
      Promise.reject(new Error('Database connection error'))
    );
    await expect(connectMongoDB()).rejects.toThrow('Database connection error');
    expect(mockConnection).toHaveBeenCalledTimes(1);
  });
});
describe('Event handler for connected event', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should log "Database connected"', async () => {
    const mockLog = jest.spyOn(console, 'log');
    await connectMongoDB(); // Connect to MongoDB to trigger the event handler

    // Simulate the 'connected' event
    mongoose.connection.emit('connected');

    expect(mockLog).toHaveBeenCalledWith('Database connected');
  });
});

describe('Should test MongoDB connection', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_MONGODB_URI = '';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should throw error when there is not MOGODB URI', async () => {
    await expect(connectMongoDB()).rejects.toThrow(
      'Database connection string is not defined'
    );
  });
});
