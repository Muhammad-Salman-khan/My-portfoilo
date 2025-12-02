import Markdown from "react-markdown";
import type { Post } from "~/types";
import type { Route } from "./+types/detail";
export const loader = async ({ request, params }: Route.LoaderArgs) => {
  try {
    const { slug } = params;
    const url = new URL(`/posts-meta.json`, request.url);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Failed to find the post");
    const data = await res.json();
    const post = data.find((post: Post) => post.slug === slug);
    if (!post) throw new Error("404 Post not found");
    const markdown = await import(`../../posts/${slug}.md?raw`);
    return {
      post,
      markdown: markdown.default,
    };
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
const detail = ({ loaderData }: Route.ComponentProps) => {
  const { post, markdown } = loaderData;
  return (
    <>
      <Markdown />
    </>
  );
};

export default detail;
