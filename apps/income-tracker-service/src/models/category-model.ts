import { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema({
  name: String,
  description: String,
  createdAt: { type: Date!, default: new Date() },
  updatedAt: { type: Date!, default: new Date() },
  category_image: String,
});

export const CategoryModel = models.categories || model('categories', CategorySchema);
