"use client";
import { PostProps } from "@/typing";
import Link from "next/link";
import React from "react";
import { HiLink } from "react-icons/hi2";
import { getReadingTime } from "@/lib/util";

export default function PostCard({
  id,
  title,
  content,
  date,
  text,
}: PostProps) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="w-full p-4 relative mb-2">
      <Link
        href={`/post/${id}`}
        className="hover:text-blue-600 mb-4 block transition-colors duration-300"
      >
        <h1
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          className="text-2xl font-bold after:hover:content-['']"
        >
          {title}
          {show && (
            <HiLink className="inline-block ml-2 text-lg text-gray-500" />
          )}
        </h1>
      </Link>
      <div
        className="text-gray-300 prose-gray prose-sm dark:prose-invert prose-headings:mb-2 prose-p:mt-2 line-clamp-3 prose-img:w-48 prose-img:max-h-20 prose-img:object-cover prose-img:mb-2 prose-img:rounded-lg mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="">
        <div className="text-sm text-gray-500">swagger</div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time>{new Date(date).toLocaleDateString("tr-TR")}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{getReadingTime(text!)} min read</span>
        </div>
      </div>
    </div>
  );
}
