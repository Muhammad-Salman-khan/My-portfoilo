import type { Route } from "./+types/detail";
import type {
  Datatype,
  StrapiPostDetail,
  StrapiProject,
  StrapiResponse,
} from "~/types";

import { Tag, Link as LinkIcon, Hash, MoveLeft } from "lucide-react";
import { use } from "react";
import { data, Link } from "react-router";
interface DetailPostType {
  id: number;
  documentId: string;
  title: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url: string;
  date: string;
  description: string;
  category: string;
  feature: boolean;
}
export const loader = async ({ params }: Route.LoaderArgs) => {
  const { id } = params;

  try {
    const url = import.meta.env.VITE_API_URL;
    const res = await fetch(`${url}?filters[documentId][$eq]=${id}&populate=*`);
    if (!res.ok) throw new Response(await res.text(), { status: res.status });
    const json = await res.json();
    const item = json.data[0];
    const project = {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description,
      image: item.image?.url || "/images/no-image.png",
      url: item.url,
      date: item.date,
      category: item.category,
      feature: item.feature,
    };

    return { project };
  } catch (error: unknown) {
    console.error(error);
    throw new Error("Failed to load project");
  }
};
const ProjectDetails = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <div className="h-screen flex justify-center align-middle items-center max-w-screen p-3 ">
        <div className="  max-w-6xl mx-auto flex md:flex-row flex-col  rounded-2xl  shadow-2xl overflow-hidden transform bg-zinc-950 transition-all duration-300 border border-gray-400">
          {/* Image Container */}
          <div className="h-full border-r-2 w-full group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover transition-transform duration-500 opacity-100"
            />
          </div>

          <div className="p-8 text-center max-w-4xl  flex flex-col items-center">
            {/* Category Pill */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-white text-xs font-medium mb-4 tracking-wide uppercase">
              <Tag className="w-3 h-3 mr-1.5" />
              {project.category}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-white mb-2 leading-tight">
              {project.title}
            </h2>

            {/* Meta Info (Date & ID) */}
            <div className="flex items-center justify-center space-x-4 text-sm text-white mb-6">
              <div className="flex items-center"></div>
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
              <div
                className="flex items-center font-mono text-xs text-gray-500"
                title="Project ID"
              >
                <Hash className="w-3 h-3 mr-0.5 opacity-75" />
                {project.id}
              </div>
            </div>

            {/* Description */}
            <p className="text-white leading-relaxed mb-8 max-w-sm mx-auto">
              {project.description}
            </p>
            <div className="flex  align-bottom   items-center gap-3 ">
              <div className="  relative inline-flex items-center justify-center px-4 py-2 bg-zinc-800 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-lg text-sm hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <Link to="/project">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-64 group-hover:h-64 opacity-10"></span>
                  <div className="flex justify-center align-middle items-center gap-2">
                    <MoveLeft size={25} />
                    <span className="relative text-sm flex items-center">
                      Go back
                    </span>
                  </div>
                </Link>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative  inline-flex items-center justify-center px-4 py-2 text-sm bg-zinc-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-64 group-hover:h-64 opacity-10"></span>
                <span className="relative break-after-all flex items-center">
                  View Live Site
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
