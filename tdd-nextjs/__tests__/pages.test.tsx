import { render, screen } from "@testing-library/react";
import Pages from "@/pages/pages";
import { User } from "@/lib";

vi.mock("@/components/ClientComponent", () => ({
  default: () => <div />,
}));

describe("pages", () => {
  const fakeUser: User = {
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  };

  it("should render a page", () => {
    render(<Pages user={fakeUser} />);

    // renders titles
    expect(screen.getByText("Server-ish Component!")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();

    // renders correct user data
    expect(screen.getByLabelText("id").textContent).toBe("will-sather");
    expect(screen.getByLabelText("first-name").textContent).toBe("Will");
    expect(screen.getByLabelText("last-name").textContent).toBe("Sather");
  });
});
