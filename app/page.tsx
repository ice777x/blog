import PostCard from "@/components/PostCard";
import {Post} from "@prisma/client";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.items;
}
export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="">
      <div className="text-sm text-gray-600 font-bold uppercase">Feed</div>
      <div className="divide-y-2  divide-dashed divide-gray-400">
        {posts.length > 0 &&
          posts.map((post: Post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              date={post.createdAt.toLocaleString("tr-TR")}
              text={post.text}
            />
          ))}
      </div>
    </main>
  );
}
