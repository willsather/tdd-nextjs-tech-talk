import { render, screen } from "@testing-library/react";
import Page from "./page";

vi.mock("./components/productsList");

describe("app-one", () => {
  it("can render page", async () => {
    render(<Page />);

    expect(screen.getByText("Application #1")).toBeInTheDocument();
  });
});
