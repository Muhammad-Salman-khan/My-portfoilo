import { Link } from "react-router";
import type { Post } from "~/types";
import type { Route } from "./+types";
import BlogCard from "~/components/BlogCard";
export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> => {
  try {
    const url = new URL("/posts-meta.json", request.url);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Failed to fetched data");
    const data = await res.json();
    return { posts: data };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const index = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  return (
    <>
      <div className="bg-slate-950 min-h-screen rounded-md max-w-3xl mx-auto mt-10 px-6 py-6 ">
        <h2 className="text-3xl text-white text-center uppercase font-bold mb-8">
          {" "}
          Blog
        </h2>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default index;
