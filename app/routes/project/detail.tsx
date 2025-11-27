import type { Datatype } from "~/types";
import type { Route } from "./+types/detail";

import { Calendar, Tag, Link as LinkIcon, Star, Hash } from "lucide-react";

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;
  try {
    const req = await fetch(`http://localhost:8000/projects/${id}`);
    const data: Datatype = await req.json();
    return { Project: data };
  } catch (error: unknown) {
    console.error(error);
    throw new Error("Failed to load project");
  }
}

export default function ProjectDetails({ loaderData }: Route.ComponentProps) {
  const {
    Project: { title, id, image, date, category, featured, url, description },
  } = loaderData;

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-5 bg-stone-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 border border-gray-800">
        {/* Image Container */}
        <div className="relative h-80 w-full group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-2 right-4 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg backdrop-blur-md bg-opacity-90">
              <Star className="w-3 h-3 mr-1 fill-amber-950" />
              FEATURED
            </div>
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="p-8 text-center flex flex-col items-center">
          {/* Category Pill */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4 tracking-wide uppercase">
            <Tag className="w-3 h-3 mr-1.5" />
            {category}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-white mb-2 leading-tight">
            {title}
          </h2>

          {/* Meta Info (Date & ID) */}
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
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
          <p className="text-gray-300 leading-relaxed mb-8 max-w-sm mx-auto">
            {description}
          </p>

          {/* Action Button */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-64 group-hover:h-64 opacity-10"></span>
            <span className="relative flex items-center">
              View Project
              <LinkIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
