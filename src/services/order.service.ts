import { Order, OrderType } from '../models/order.model';
import { nanoid } from 'nanoid';

export async function getOrders(id?: string) {
  let query: object = {};
  if (id) {
    query = {
      customer: id,
    };
  }

  return Order.find(query).populate('product');
}

export async function createOrder(customer: string, product: string) {
  return Order.create({
    _id: nanoid(),
    customer,
    product,
    iat: Date.now(),
  });
}
