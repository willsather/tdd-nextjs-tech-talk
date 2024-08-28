/**
 * @vi-environment node
 */

import { GET } from "@/app/api/v2/user/route";

vi.mock("@/lib", () => ({
  getUser: vi.fn().mockResolvedValue({
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  }),
}));

describe("user", () => {
  describe("GET", () => {
    it("retrieves", async () => {
      const response = await GET();

      expect(response.ok).toBe(true);
      const json = await response.json();

      expect(json.id).toEqual("will-sather");
      expect(json.firstName).toEqual("Will");
      expect(json.lastName).toEqual("Sather");
    });
  });
});
