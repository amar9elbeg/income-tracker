import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: String!,
  name: String!,
  password: String!,
  updatedAt: { type: Date!, default: new Date() },
  createdAt: { type: Date!, default: new Date() },
  currency_type: String,
});

export const UserModel = models.users || model('users', UserSchema);
