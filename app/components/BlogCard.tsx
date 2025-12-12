import { Link } from "react-router";
import type { Post, StrapiPost } from "~/types";

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <>
      <div
        key={post.id}
        className="relative flex w-full flex-col rounded-md p-3 mb-2 bg-zinc-900 bg-clip-border text-white shadow-md"
      >
        <img
          src={post.image}
          alt={post.title}
          className="relative h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border  shadow-lg shadow-blue-gray-500/40 "
        />

        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {post.title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {post.excerpt}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link
            to={`/blog/${post.document}`}
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
