import { NextApiRequest, NextApiResponse } from "next";
import userApi from "@/pages/api/v1/user";

vi.mock("@/lib", () => ({
  getUser: vi.fn().mockResolvedValue({
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  }),
}));

describe("hello api", () => {
  const json = vi.fn();
  const status = vi.fn(() => ({ json }));

  const response = { status } as unknown as NextApiResponse;

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("GET", () => {
    it("retrieves user successfully", async () => {
      await userApi({ method: "GET" } as NextApiRequest, response);

      expect(status).toHaveBeenCalledWith(200);
      expect(json).toHaveBeenCalledWith({
        id: "will-sather",
        firstName: "Will",
        lastName: "Sather",
      });
    });
  });
});
