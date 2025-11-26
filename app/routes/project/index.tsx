import type { Datatype } from "~/types";
import type { Route } from "./+types/index";
import Card from "~/components/Card";

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
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl uppercase font-extrabold text-gray-900 dark:text-white p-3 mt-4 mb-4">
          Projects
        </h1>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 xl:gap-12">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
