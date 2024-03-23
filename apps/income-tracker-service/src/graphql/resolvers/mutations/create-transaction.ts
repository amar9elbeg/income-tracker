import { TransactionModel, TransactionType } from '../../../models/transaction-model';

type CreateTransactionProps = {
  input: {
    user_id: string;
    name: string;
    amount: number;
    transaction_type: TransactionType;
    description: string;
    category_id: string;
  };
};

export const createTransaction = async (_: unknown, { input }: CreateTransactionProps) => {
  
  try {

    const transaction = await TransactionModel.create(input);
    return transaction;
    
  } catch (err) {
    console.log(err);
  }
};
