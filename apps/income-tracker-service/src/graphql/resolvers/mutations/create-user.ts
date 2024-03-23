import { UserModel } from '../../../models/user-model';
import bcrypt from 'bcryptjs';

type CreateUserProps = {
  input: {
    email: string;
    name: string;
    password: string;
    currency_type: string;
  };
};

export const createUser = async (_: unknown, { input }: CreateUserProps) => {
  const { password } = input;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({ ...input, password: hashedPassword });
    return user;
    
  } catch (err) {
    console.log(err);
  }
};
