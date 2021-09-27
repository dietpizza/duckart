import { Schema, model } from 'mongoose';

export type OrderType = {
  _id: string;
  customer_id: string;
  product_id: string;
  iat: number;
};

const OrderSchema = new Schema({
  _id: { type: String, required: true },
  customer: { type: String, required: true, ref: 'user' },
  product: { type: String, required: true, ref: 'products' },
  iat: { type: Number, required: true },
});

export const Order = model<OrderType>('order', OrderSchema);
