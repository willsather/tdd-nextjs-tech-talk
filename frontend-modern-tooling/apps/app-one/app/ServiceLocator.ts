import { CustomProductService, type ProductService } from "@repo/commerce";
import { type CheckoutService, CustomCheckoutService } from "@repo/payment";

class ServiceLocator {
  private productService: ProductService | undefined;
  private checkoutService: CheckoutService | undefined;

  useProductService(): ProductService {
    if (this.productService == null) {
      this.productService = new CustomProductService();
    }
    return this.productService;
  }

  setProductService(productService: ProductService) {
    this.productService = productService;
  }

  usePaymentService(): CheckoutService {
    if (this.checkoutService == null) {
      this.checkoutService = new CustomCheckoutService();
    }
    return this.checkoutService;
  }

  setPaymentService(checkoutService: CheckoutService) {
    this.checkoutService = checkoutService;
  }
}

const serviceLocator = new ServiceLocator();

export default serviceLocator;
