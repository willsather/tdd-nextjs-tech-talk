import { render, screen } from "@testing-library/react";
import type { User } from "@/lib";
import Pages, { getServerSideProps } from "@/pages/pages";

vi.mock("@/lib", () => ({
  getUser: vi.fn().mockResolvedValue({
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  }),
}));

vi.mock("@/components/ClientComponent", () => ({
  default: () => <div />,
}));

describe("Pages", () => {
  const fakeUser: User = {
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  };

  it("should render page with a user", async () => {
    // when page is rendered
    render(<Pages user={fakeUser} />);

    // then renders titles
    expect(screen.getByText("Server-ish Component!")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();

    // and then renders correct user data
    expect(screen.getByLabelText("id").textContent).toBe("will-sather");
    expect(screen.getByLabelText("first-name").textContent).toBe("Will");
    expect(screen.getByLabelText("last-name").textContent).toBe("Sather");
  });

  it("getServerSideProps retrieves a user", async () => {
    // when getServerSideProps is called
    const { props } = await getServerSideProps();

    // then user is present
    expect(props.user).not.toBeNull();

    // and then user is correct
    expect(props.user.id).toBe("will-sather");
    expect(props.user.firstName).toBe("Will");
    expect(props.user.lastName).toBe("Sather");
  });
});
