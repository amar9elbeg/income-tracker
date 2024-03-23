import { CategoryModel } from '../../../src/models/category-model';
import { createCategory } from '../../../src/graphql/resolvers/mutations/create-category';


const mockInput = {
  name: 'name',
  description: 'description'
};

describe('', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should create new category', async () => {
    const mockCreate = jest.spyOn(CategoryModel, 'create');
    mockCreate.mockImplementation();

    try {
      await createCategory(undefined, { input: mockInput });
    } catch (err) {
      console.log(err);
    }
    expect(mockCreate).toHaveBeenCalled();
  });

  it('Should throw error', async () => {
    const mockError = new Error('test error');
    const mockCreate = jest.spyOn(CategoryModel, 'create');

    mockCreate.mockImplementation(() => {
      throw mockError;
    });

    try {
      await createCategory(undefined, { input: mockInput });
    } catch (err) {
      expect(err).toEqual(mockError);
    }

    expect(mockCreate).toHaveBeenCalled();
  });
});
