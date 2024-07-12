import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const res = await request.json();

  return new Response("successful", { status: 200 });
};
