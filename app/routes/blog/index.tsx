import { useState } from "react";
import { Link } from "react-router";
import type { Post } from "~/types";
import type { Route } from "./+types";
import BlogCard from "~/components/BlogCard";
import Search from "~/components/Search";
export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> => {
  try {
    const url = new URL("/posts-meta.json", request.url);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Failed to fetched data");
    const data = await res.json();
    data.sort((a: Post, b: Post) => {
      return new Date(b.date).getDate() - new Date(a.date).getDate();
    });
    return { posts: data };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const index = ({ loaderData }: Route.ComponentProps) => {
  const [search, setSearched] = useState<string>("");
  const { posts } = loaderData;
  const FilterdPost: any = posts.filter((post) => {
    const query = search.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <div className="bg-slate-950 min-h-screen rounded-md max-w-3xl mx-auto mt-10 px-6 py-6 ">
        <h2 className="text-3xl text-white text-center uppercase font-bold mb-8">
          {" "}
          Blog
        </h2>
        <Search seachQuery={search} onSearchChange={(e) => setSearched(e)} />
        {search.length > 0
          ? FilterdPost.map((post: any) => (
              <BlogCard key={post.id} post={post} />
            ))
          : posts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default index;
