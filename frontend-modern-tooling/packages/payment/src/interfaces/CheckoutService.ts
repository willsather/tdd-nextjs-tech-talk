import type { Checkout } from "../types";

export default interface CheckoutService {
  prepareCheckout: (amount: string, currency: string) => Promise<Checkout>;
  processCheckout: (checkoutId: string) => Promise<Checkout>;
}
