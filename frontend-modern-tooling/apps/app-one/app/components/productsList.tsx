import type { Product } from "@repo/commerce";
import serviceLocator from "../ServiceLocator";

export default async function ProductList() {
  // NOTE: this component ONLY depends on the port
  const productService = serviceLocator.useProductService();
  const products = await productService.getProducts();

  return (
    <>
      <hr className="bg-white" />

      <h2 className="my-8 text-center font-bold text-3xl md:mt-16">Products</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h5 className="font-semibold text-gray-900 text-xl">
              {product.title}
            </h5>
            <p className="mt-2 text-gray-600">Product ID: {product.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
