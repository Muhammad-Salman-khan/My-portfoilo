import { ExternalLink, Calendar, Tag, Star } from "lucide-react";
import { Link } from "react-router";
import type { Datatype } from "~/types";
const Card = ({ project }: { project: Datatype }) => {
  return (
    <>
      <Link
        to={`/project/${project.id}`}
        key={project.id}
        rel="noopener noreferrer"
        className={`group relative flex flex-col h-60 justify-end overflow-hidden rounded-md bg-gray-100 dark:bg-gray-900 shadow-xl transition-all hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 
          ${project.featured ? "md:col-span-2" : "col-span-1"}`}
      >
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700  group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        {/* Adjusted gradient to cover more height since the card is taller now */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-bold text-black backdrop-blur-md shadow-lg">
              <Star className="h-3 w-3 fill-current" /> Featured
            </span>
          </div>
        )}

        <div className="relative z-20 p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-white/80">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/80 px-2.5 py-1 text-white backdrop-blur-sm">
              <Tag className="h-3 w-3" />
              {project.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {project.date}
            </span>
          </div>

          <h3 className="mb-2 text-2xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="pt-4 flex items-center gap-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                <span>View my projects</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <span>{project.description}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
