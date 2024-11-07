import { render, screen } from "@testing-library/react";
import { ProductService } from "@repo/commerce";
import ProductsList from "./productsList";
import serviceLocator from "../ServiceLocator";

describe("ProductsList", () => {
  const mockProductService: ProductService = {
    getProduct: vi.fn().mockResolvedValue({
      id: "product-one",
      title: "Product One",
    }),
    getProducts: vi.fn().mockResolvedValue([
      { id: "product-one", title: "Product One" },
      { id: "product-two", title: "Product Two" },
    ]),
  };

  it("can render page", async () => {
    serviceLocator.setProductService(mockProductService);

    const productsList = await ProductsList();
    render(productsList);

    expect(screen.getByText("Product One")).toBeInTheDocument();
    expect(screen.getByText("Product Two")).toBeInTheDocument();
  });
});
