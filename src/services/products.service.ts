import { Products, ProductsType } from '../models/products.model';
import { nanoid } from 'nanoid';

export async function getAllProducts(): Promise<Array<ProductsType>> {
  return Products.find();
}

export async function addProduct(product: object): Promise<ProductsType> {
  product['_id'] = nanoid();
  return Products.create(product);
}
