import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import type { User } from "@/lib";
import ClientComponent from "@/components/ClientComponent";

describe("ClientComponent", () => {
  const fakeUser: User = {
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  };

  it("should render client component with a user", async () => {
    // given fetch returns this json
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(fakeUser),
      status: 200,
      ok: true,
    });

    // when client component is rendered
    render(<ClientComponent />);

    await waitForElementToBeRemoved(() => screen.queryByText("Loading!"));

    // then renders titles
    expect(screen.getByText("Client Component!")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();

    // and then renders correct user data
    expect(screen.getByLabelText("id").textContent).toBe("will-sather");
    expect(screen.getByLabelText("first-name").textContent).toBe("Will");
    expect(screen.getByLabelText("last-name").textContent).toBe("Sather");
  });

  it("should render client component failure with an error", async () => {
    // given fetch returns this json
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: vi.fn(),
      status: 500,
      ok: false,
    });

    // when client component is rendered
    render(<ClientComponent />);

    await waitForElementToBeRemoved(() => screen.queryByText("Loading!"));

    // then renders titles
    expect(screen.getByText("Error!")).toBeInTheDocument();
    expect(screen.getByText("Failed to retrieve user")).toBeInTheDocument();
  });
});
