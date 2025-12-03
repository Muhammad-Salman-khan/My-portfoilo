import ReactMarkdown from "react-markdown";
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
  // BlogArticle.tsx
  return (
    <>
      <div className="min-h-screen bg-zinc-950 px-4 sm:px-6 lg:px-8">
        {/* Header / Title */}
        <header className="pt-10 pb-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-100 leading-tight">
              {post.title}
            </h1>

            {/* Optional meta line – keep or delete */}
            <p className="mt-3 text-sm text-gray-400">
              {new Date(post.date || Date.now()).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </header>

        {/* Article body */}
        <main className="px-4 pb-16 sm:pb-20 md:pb-24">
          <article className="mx-auto w-full max-w-3xl text-gray-200">
            {/* prose-neutral keeps Tailwind’s default colours; we override text colour below */}
            <div className="prose prose-sm sm:prose-base md:prose-lg prose-neutral prose-invert text-white">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default detail;
