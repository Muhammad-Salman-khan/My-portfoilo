import type { Route } from "./+types/detail";
import type { Datatype } from "~/types";

import {
  Calendar,
  Tag,
  Link as LinkIcon,
  Star,
  Hash,
  ArrowBigLeft,
} from "lucide-react";
import { use } from "react";
import { Link } from "react-router";

export const loader = async ({
  params,
}: Route.LoaderArgs): Promise<{ Project: Datatype }> => {
  const { id } = params;
  try {
    const res = await fetch(`http://localhost:8000/projects/${id}`);
    if (!res.ok) throw new Error(`Project not found `);
    const data: Datatype = await res.json();
    return { Project: data };
  } catch (error: unknown) {
    console.error(error);
    throw new Error("Failed to load project");
  }
};
const ProjectDetails = ({ loaderData }: Route.ComponentProps) => {
  const {
    Project: { title, id, image, date, category, featured, url, description },
  } = loaderData;

  return (
    <>
      <div className="min-h-screen flex justify-center align-middle items-center max-w-screen p-3 ">
        <div className="w-full  max-w-4xl mx-auto  flex  md:flex-row flex-col  rounded-2xl  shadow-2xl overflow-hidden transform  bg-black transition-all duration-300 border border-gray-400">
          {/* Image Container */}
          <div className="h-full border-r-2 w-full group">
            <img
              src={image}
              alt={title}
              className="w-full maxh-screen object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />

            {/* Overlay Gradient */}
          </div>

          {/* Content Body */}
          <div className="p-8 text-center  flex flex-col items-center">
            {/* Category Pill */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-white text-xs font-medium mb-4 tracking-wide uppercase">
              <Tag className="w-3 h-3 mr-1.5" />
              {category}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-white mb-2 leading-tight">
              {title}
            </h2>

            {/* Meta Info (Date & ID) */}
            <div className="flex items-center justify-center space-x-4 text-sm text-white mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 opacity-75" />
                <span>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
              <div
                className="flex items-center font-mono text-xs text-gray-500"
                title="Project ID"
              >
                <Hash className="w-3 h-3 mr-0.5 opacity-75" />
                {id}
              </div>
            </div>

            {/* Description */}
            <p className="text-white leading-relaxed mb-8 max-w-sm mx-auto">
              {description}
            </p>
            <div className="flex justify-center align-middle items-center gap-3 ">
              <div className=" border-2 relative inline-flex items-center justify-center px-4 py-2 bg-stone-950 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-lg text-sm hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <Link to="/project">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-64 group-hover:h-64 opacity-10"></span>
                  <div className="flex justify-center align-middle items-center gap-2">
                    <ArrowBigLeft size={25} />
                    <span className="relative text-sm flex items-center">
                      Go back
                    </span>
                  </div>
                </Link>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 inline-flex items-center justify-center px-4 py-2 text-sm bg-stone-950 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-64 group-hover:h-64 opacity-10"></span>
                <span className="relative flex items-center">
                  View Project
                  <LinkIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetails;
