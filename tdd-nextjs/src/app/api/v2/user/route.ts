import { NextResponse } from "next/server";
import { getUser } from "@/lib";

export async function GET() {
  const user = await getUser();

  if (user == null) {
    return NextResponse.json(user, { status: 500 });
  }

  return NextResponse.json(user, { status: 200 });
}
