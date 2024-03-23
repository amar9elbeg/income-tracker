import { CategoryModel } from '../../../models/category-model';

type CreateCategoryProps = {
  input: {
    name: string;
    description: string;
  };
};

export const createCategory = async (_: unknown, { input }: CreateCategoryProps) => {
  
  try {
    const category = await CategoryModel.create(input);
    return category;
    
  } catch (err) {
    console.log(err);
  }
};
