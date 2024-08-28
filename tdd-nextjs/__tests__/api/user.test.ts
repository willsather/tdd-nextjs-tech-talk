/**
 * @vi-environment node
 */

import api from "@/pages/api/v1/user";

import { NextApiRequest } from "next/dist/shared/lib/utils";
import { NextApiResponse } from "next";

vi.mock("@/lib", () => ({
  getUser: vi.fn().mockResolvedValue({
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  }),
}));

describe("user", () => {
  const json = vi.fn();
  const end = vi.fn();
  const setHeader = vi.fn();

  const status = vi.fn(() => ({
    end,
    json,
    setHeader,
  }));

  afterEach(() => {
    vi.resetAllMocks;
  });

  describe("GET", () => {
    it("successfully retrieve a user", async () => {
      // given mock request and response
      const request = { method: "GET" } as NextApiRequest;
      const response = { status } as unknown as NextApiResponse;

      // when api is called
      await api(request, response);

      // then the status is successful and a user is returned
      expect(status).toHaveBeenCalledWith(200);
      expect(json).toHaveBeenCalledWith({
        id: "will-sather",
        firstName: "Will",
        lastName: "Sather",
      });
    });

    test.each(["POST", "PUT", "PATCH", "DELETE"])(
      "%s fails to perform invalid method request",
      async (method) => {
        // given mock request and response
        const request = { method } as NextApiRequest;
        const response = { status, setHeader } as unknown as NextApiResponse;

        // when api is called
        await api(request, response);

        // then the status is not successful
        expect(status).toHaveBeenCalledWith(405);
      }
    );
  });
});
