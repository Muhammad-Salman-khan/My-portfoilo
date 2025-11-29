import type { Datatype } from "~/types";
import type { Route } from "./+types/index";
import { useState } from "react";
import Card from "~/components/Card";
import Pagination from "~/components/Pagination";

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
  const { projects } = loaderData;
  const [currentPage, setCurrentPage] = useState(1);
  const ProjectPerPage = 2;

  const totalPage = projects.length / ProjectPerPage;
  const lastIndex = currentPage * ProjectPerPage;
  const FirstIndex = (currentPage - 1) * ProjectPerPage;
  const currentProjects = projects.slice(FirstIndex, lastIndex);
  console.log(currentPage);
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl uppercase font-extrabold text-gray-900 dark:text-white p-3 mt-4 mb-4">
          Projects
        </h1>
      </div>

      <div className="container mx-auto p-4">
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 xl:gap-12">
          {currentProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
