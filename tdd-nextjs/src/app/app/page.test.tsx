import { render, screen } from "@testing-library/react";
import AppPage from "@/app/app/page";

vi.mock("@/components/ClientComponent", () => ({
  default: () => <div />,
}));

vi.mock("@/lib", () => ({
  getUser: vi.fn().mockResolvedValue({
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  }),
}));

describe("app", () => {
  it.fails("should render app page", async () => {
    // this approach doesn't work (as the server component is nested)
    const page = AppPage();
    render(page);

    // renders titles
    expect(screen.getByText("Server Component!")).toBeInTheDocument();
    expect(screen.getByText("Client Component!")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();

    // renders correct user data
    expect(screen.getByLabelText("id").textContent).toBe("will-sather");
    expect(screen.getByLabelText("first-name").textContent).toBe("Will");
    expect(screen.getByLabelText("last-name").textContent).toBe("Sather");
  });
});
