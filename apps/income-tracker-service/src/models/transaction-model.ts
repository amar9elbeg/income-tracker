import { Schema, model, models } from 'mongoose';

export enum TransactionType {
  'EXP',
  'INC',
}

const TransactionSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'users' },
  name: String,
  amount: Number!,
  transaction_type: { type: String, TransactionType },
  description: String,
  createdAt: { type: Date!, default: new Date() },
  updatedAt: { type: Date!, default: new Date() },
  category_id: { type: Schema.Types.ObjectId, ref: 'categories' },
});

export const TransactionModel =
  models.transactions || model('transactions', TransactionSchema);
