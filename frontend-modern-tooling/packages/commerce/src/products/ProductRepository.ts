import type { Product } from "./Product";

export default interface ProductRepository {
  getProduct: (id: string) => Promise<Product>;
  getProducts: () => Promise<Product[]>;
}
