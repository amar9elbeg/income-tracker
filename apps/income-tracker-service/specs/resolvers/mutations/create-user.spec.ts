import { UserModel } from '../../../src/models/user-model';
import { createUser } from '../../../src/graphql/resolvers/mutations/create-user';

jest.mock('../../../src/models/user-model');

const mockInput = {
  name: 'test',
  email: 'test@yahoo.com',
  password: 'test',
  currency_type: 'MNT',
};

describe('', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should create new user', async () => {
    const mockCreateUser = jest.spyOn(UserModel, 'create');
    mockCreateUser.mockImplementation();

    try {
      await createUser(undefined, { input: mockInput });
    } catch (err) {
      console.log(err);
    }
    expect(mockCreateUser).toHaveBeenCalled();
  });

  it('Should throw error', async () => {
    const mockError = new Error('test error');
    const mockCreateUser = jest.spyOn(UserModel, 'create');

    mockCreateUser.mockImplementation(() => {
      throw mockError;
    });

    try {
      await createUser(undefined, { input: mockInput });
    } catch (err) {
      expect(err).toEqual(mockError);
    }

    expect(mockCreateUser).toHaveBeenCalled();
  });
});
