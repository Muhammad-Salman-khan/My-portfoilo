import { useState } from "react";
import { Link } from "react-router";
import type { Post, StrapiPost, StrapiResponse } from "~/types";
import type { Route } from "./+types";
import BlogCard from "~/components/BlogCard";
import Search from "~/components/Search";
export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> => {
  try {
    const url = import.meta.env.VITE_API_KEY;
    const ImgUrl = import.meta.env.VITE_STRAPI_API;
    const res = await fetch(`${url}posts?populate=image`);
    if (!res.ok) throw new Error("Failed to fetched data");
    const json: StrapiResponse<StrapiPost> = await res.json();
    const posts = json.data.map((item) => ({
      id: item.id,
      document: item.documentId,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      body: item.body,
      image: item.image?.url ? `${item.image?.url}` : "/images/no-image.png",
      date: item.date,
    }));
    return { posts };
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
      post.excerpt.toLowerCase().includes(query) ||
      post.slug.toLowerCase().includes(query)
    );
  });
  return (
    <>
      <div className="bg-slate-950 rounded-md max-w-3xl mx-auto mt-10 px-6 py-6 ">
        <h2 className="text-3xl text-white text-center uppercase font-bold mb-8">
          {" "}
          Blog
        </h2>
        <Search seachQuery={search} onSearchChange={(e) => setSearched(e)} />
        {FilterdPost.length > 0 ? (
          FilterdPost.map((post: Post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <p className="text-white text-center font-extrabold text-xl">
            Not Found
          </p>
        )}
      </div>
    </>
  );
};

export default index;
