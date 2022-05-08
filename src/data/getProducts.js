import { products } from './products';

export const getProducts = () => {
  return Promise.resolve(products);
};

export const getProduct = (id) => {
  const product = products.find((p) => p.id === id);
  return Promise.resolve(product);
}