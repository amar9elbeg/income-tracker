import {
  isEmptyQuery,
  Query,
  assignProp,
  expenseQuery,
} from '../../../src/graphql/resolvers/queries/expense';
import {
  TransactionModel,
  TransactionType,
} from '../../../src/models/transaction-model';

test('is empty query', () => {
  const query: Query = {};

  expect(isEmptyQuery(query)).toBe(true);

  assignProp(query, 'type', 'EXP');

  expect(isEmptyQuery(query)).toBe(false);
});

describe('test exponse query', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  const mockInput = {
    type: TransactionType.EXP,
    categoryIds: [],
    pageNumber: 1,
    pageSize: 4,
    maxAmount: 10,
    minAmount: 100,
  };

  it('Should query expense', async () => {
    const mockFind = jest.spyOn(TransactionModel, 'find');
    mockFind.mockImplementation();

    try {
      await expenseQuery(undefined, { args: mockInput });
    } catch (err) {
      console.log(err);
    }
    expect(mockFind).toHaveBeenCalled();
  });
});
