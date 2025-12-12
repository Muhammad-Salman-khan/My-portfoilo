import type { Datatype, StrapiProject, StrapiResponse } from "~/types";
import type { Route } from "./+types/index";
import { useState, type ReactNode } from "react";
import Card from "~/components/Card";
import Button from "~/components/Button";
import { LazyMotion, domAnimation, motion, scale } from "motion/react";
export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: Datatype[] }> => {
  try {
    let url = import.meta.env.VITE_API_KEY;
    const res = await fetch(`${url}projects?populate=*`);
    if (!res.ok) throw new Response(await res.text(), { status: res.status });
    const json: StrapiResponse<StrapiProject> = await res.json();
    const projects = json.data.map((data: any) => ({
      id: data.id,
      documentId: data.documentId,
      title: data.title,
      image: data.image?.url ? `${data.image?.url}` : "/images/no-image.png",
      url: data.url,
      date: data.date,
      category: data.category,
      description: data.description,
      feature: data.feature,
    }));

    return { projects };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const index = ({ loaderData }: Route.ComponentProps) => {
  const [categories, SelectedCategories] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const { projects } = loaderData;
  const category = [
    "All",
    ...new Set(projects.map((projects) => projects.category)),
  ];
  const filterdProjects =
    categories === "All"
      ? projects
      : projects.filter((e) => e.category === categories);
  const ProjectPerPage = 10;
  const totalPage = filterdProjects.length / ProjectPerPage;
  const lastIndex = currentPage * ProjectPerPage;
  const FirstIndex = (currentPage - 1) * ProjectPerPage;
  const currentProjects = filterdProjects.slice(FirstIndex, lastIndex);
  const RenderCategories = ["All", "Full-stack", "Front-end"];

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl uppercase font-extrabold text-gray-900 dark:text-white p-3 mt-4 mb-4">
          Projects
        </h1>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-flex align-middle items-center gap-2">
          {RenderCategories.map((e, id) => (
            <Button key={id} select={() => SelectedCategories(e)}>
              {e}
            </Button>
          ))}
        </div>
        <LazyMotion features={domAnimation}>
          <motion.div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 xl:gap-12">
            {currentProjects.map((project) => (
              <motion.div
                whileHover={{ scale: 0.9, transition: { duration: 1 } }}
                transition={{ duration: 0.5 }}
                layout
                key={project.id}
                className={`    ${
                  project.feature ? "md:col-span-2" : "col-span-1"
                }`}
              >
                <Card project={project} />
              </motion.div>
            ))}
          </motion.div>
        </LazyMotion>
      </div>
    </>
  );
};

export default index;
