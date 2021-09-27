import { Products, ProductsType } from '../models/products.model';
import { nanoid } from 'nanoid';

export async function getAllProducts() {
  return Products.find();
}

export async function addProduct(product: object) {
  product['_id'] = nanoid();
  return Products.create(product);
}
