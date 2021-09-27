import { Order, OrderType } from '../models/order.model';
import { nanoid } from 'nanoid';

export async function getOrders(id?: string): Promise<Array<OrderType>> {
  let query: object = {};
  if (id) {
    query = {
      customer: id,
    };
  }

  return Order.find(query).populate('product');
}

export async function createOrder(
  customer: string,
  product: string
): Promise<OrderType> {
  return Order.create({
    _id: nanoid(),
    customer,
    product,
    iat: Date.now(),
  });
}
