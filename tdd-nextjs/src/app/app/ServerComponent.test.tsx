import { render, screen } from "@testing-library/react";
import ServerComponent from "@/app/app/ServerComponent";

vi.mock("@/lib", () => ({
  getUser: vi.fn().mockResolvedValue({
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  }),
}));

describe("ServerComponent", () => {
  it("should render serverish component with a user", async () => {
    // when serverish component is rendered
    const component = await ServerComponent();
    render(component);

    // then renders titles
    expect(screen.getByText("Server Component!")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();

    // and then renders correct user data
    expect(screen.getByLabelText("id").textContent).toBe("will-sather");
    expect(screen.getByLabelText("first-name").textContent).toBe("Will");
    expect(screen.getByLabelText("last-name").textContent).toBe("Sather");
  });
});
