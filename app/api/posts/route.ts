import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const post = await prisma.post.findMany({});
  return NextResponse.json({
    message: "Posts",
    items: post,
  });
}
