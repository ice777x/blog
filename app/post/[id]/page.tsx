import Image from "next/image";
import React from "react";
import { prisma } from "@/lib/db";
import { getReadingTime } from "@/lib/util";

async function getPosts(id: string) {
  const res = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return res;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPosts(id);
  console.log(post);
  return (
    <div className="pb-12">
      <div
        className="flex flex-col prose dark:prose-invert mx-auto mb-8 prose-img:rounded-lg prose-img:mb-8  prose-img:object-cover prose-img:w-full prose-img:max-h-80 "
        dangerouslySetInnerHTML={{
          __html:
            `<Image src="${post?.image}" alt="${post?.title}"/><h1>${post?.title}</h1>${post?.content}` ||
            "",
        }}
      />
      <div className="max-w-prose mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-full">
            <div className="border-t border-dashed w-full pt-4">
              <p className="text-sm font-medium text-gray-300">
                <a href="#" className="hover:underline">
                  ice777x
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">Mar 16, 2020</time>
                <span aria-hidden="true">&middot;</span>
                <span>{getReadingTime(post?.text!)} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
