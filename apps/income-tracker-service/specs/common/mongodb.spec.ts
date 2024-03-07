import connectMongoDB from '../../src/common/mongodb/mongodb';
import mongoose from 'mongoose';

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

  it('Should log "Database connected"', async () => {
    const mockLog = jest.spyOn(console, 'log');
    await connectMongoDB();

    mongoose.connection.emit('connected');
    expect(mockLog).toHaveBeenCalledWith('Database connected successfully');
  });

  it('Should log "Database disconnected"', async () => {
    const mockLog = jest.spyOn(console, 'log');
    await connectMongoDB();

    mongoose.connection.emit('disconnected');
    expect(mockLog).toHaveBeenCalledWith('Database disconnected');
  });
});

describe('Event handler for error event', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should log "Database connection error" when error occurs', async () => {
    const mockError = jest.spyOn(console, 'error');
    await connectMongoDB();

    const testError = new Error('Test error');
    mongoose.connection.emit('error', testError);

    expect(mockError).toHaveBeenCalledWith(
      'Database connection error:',
      testError
    );
  });
});

describe('Should throw error when there is no env', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_MONGODB_URI = '';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should throw error when there is not MONGODB URI', async () => {
    await expect(connectMongoDB()).rejects.toThrow(
      'Database connection string is not defined'
    );
  });
});
