import { behavior, effect, example, fact, step } from "best-behavior";
import { expect, is, stringContaining } from "great-expectations";
import { CustomProductService } from "../../src";

export default behavior("Retrieve a Product", [
  example({
    init: () => {
      return new CustomProductService();
    },
  })
    .description("Can successfully retrieve a single product")
    .script({
      suppose: [
        // two products exist
        fact("two products exist", async () => {}),
      ],
      perform: [
        // two products exist
        step("two products exist", async () => {
          console.log("performing step");
        }),
      ],
      observe: [
        effect("a single product is returned", async (context) => {
          const product = await context.getProduct("1");
          expect(product.id, is(stringContaining("1")));
        }),
      ],
    }),
]);
