import type { Datatype } from "~/types";
import type { Route } from "./+types/index";
import { useState, type ReactNode } from "react";
import Card from "~/components/Card";
import Pagination from "~/components/Pagination";
import Button from "~/components/Button";
import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";
export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: Datatype[] }> => {
  try {
    const res = await fetch("http://localhost:8000/projects");
    const data = await res.json();
    return { projects: data };
  } catch (error: unknown) {
    console.error(error);
    throw Error();
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
  const RenderCategories = ["All", "Fullstack", "Frontend"];
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
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 xl:gap-12"
          >
            {currentProjects.map((project) => (
              <Card project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default index;
