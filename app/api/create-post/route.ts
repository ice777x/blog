import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { text } from "stream/consumers";

export async function POST(request: Request) {
  const body = await request.json();
  const { title, image, content, text } = body;
  const post = await createPost(title, image, content, text);
  if (!post) {
    return NextResponse.next();
  }
  return NextResponse.json({ message: "Create a post", status: 200, post });
}

async function createPost(
  title: string,
  image: string,
  content: string,
  text: string
) {
  if (image === "") {
    image = "/placeholder.webp";
  }
  const post = await prisma.post.create({
    data: {
      title,
      image: image,
      text: text,
      content,
    },
  });
  return post;
}
