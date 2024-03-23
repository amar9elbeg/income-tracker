import { TransactionModel, TransactionType } from '../../../src/models/transaction-model';
import { createTransaction } from '../../../src/graphql/resolvers/mutations/create-transaction';


const mockInput = {
  user_id: 'id',
  name: 'name',
  amount: 10000,
  transaction_type: TransactionType.EXP,
  description: 'description',
  category_id: 'category_id'
};

describe('', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should create new category', async () => {
    const mockCreate = jest.spyOn(TransactionModel, 'create');
    mockCreate.mockImplementation();

    try {
      await createTransaction(undefined, { input: mockInput });
    } catch (err) {
      console.log(err);
    }
    expect(mockCreate).toHaveBeenCalled();
  });

  it('Should throw error', async () => {
    const mockError = new Error('test error');
    const mockCreate = jest.spyOn(TransactionModel, 'create');

    mockCreate.mockImplementation(() => {
      throw mockError;
    });

    try {
      await createTransaction(undefined, { input: mockInput });
    } catch (err) {
      expect(err).toEqual(mockError);
    }

    expect(mockCreate).toHaveBeenCalled();
  });
});
