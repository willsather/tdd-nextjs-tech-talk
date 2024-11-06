import { render, screen } from "@testing-library/react";
import type { User } from "@/lib";
import ServerishComponent from "@/components/ServerishComponent";

describe("ServerishComponent", () => {
  const fakeUser: User = {
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  };

  it("should render serverish component with a user", async () => {
    // when serverish component is rendered
    render(<ServerishComponent user={fakeUser} />);

    // then renders titles
    expect(screen.getByText("Server-ish Component!")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();

    // and then renders correct user data
    expect(screen.getByLabelText("id").textContent).toBe("will-sather");
    expect(screen.getByLabelText("first-name").textContent).toBe("Will");
    expect(screen.getByLabelText("last-name").textContent).toBe("Sather");
  });
});
