import { getUser } from "@/lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case "GET":
      const user = await getUser();

      if (user == null) {
        response.status(500);
      }

      response.status(200).json(user);
      return;

    default:
      response.setHeader("Allow", ["GET"]);
      response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
