import { Schema, model } from 'mongoose';

export type ProductsType = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

const ProductsSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Products = model<ProductsType>('products', ProductsSchema);
