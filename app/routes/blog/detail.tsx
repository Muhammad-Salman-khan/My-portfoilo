import ReactMarkdown from "react-markdown";
import type { Post, StrapiPostDetail } from "~/types";
import type { Route } from "./+types/detail";
import { Link } from "react-router";
export const loader = async ({ request, params }: Route.LoaderArgs) => {
  const { document } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_KEY}posts/${document}?populate=*`
  );
  const json = await res.json();
  const item = json.data;
  const post: StrapiPostDetail = {
    ...item,
    image: item.image?.url ? `${item.image?.url}` : "/images/no-image.png",
  };

  return { post };
};
type BlogPost = {
  loaderData: {
    post: Post;
  };
};
const detail = ({ loaderData }: BlogPost) => {
  const { post } = loaderData;
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-gray-200">
        <div className="mx-auto max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:px-8">
          {/* Header Section */}
          <header className="mb-8 sm:mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              <time dateTime={post.date}></time>
            </p>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-10 w-full overflow-hidden rounded-xl shadow-xl shadow-zinc-900/50">
              <img
                className="w-full h-auto object-cover transform transition-transform hover:scale-[1.01] duration-500"
                src={post.image}
                alt={post.title || "Blog cover"}
              />
            </div>
          )}

          <article
            className="prose prose-zinc prose-invert prose-sm sm:prose-base md:prose-lg max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 hover:prose-a:text-blue-300
          prose-img:rounded-lg prose-img:shadow-lg"
          >
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </article>

          {/* Footer / Back Button */}
          <div className="mt-16 flex justify-center border-t border-zinc-800 pt-8">
            <Link
              to="/blog"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-500 text-white transition-all duration-300 group-hover:translate-x-0">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex h-full w-full items-center justify-center text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:translate-x-full">
                Back to Blogs
              </span>
              <span className="invisible relative">Back to Blogs</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default detail;
