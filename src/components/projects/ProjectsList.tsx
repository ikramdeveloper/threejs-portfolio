import { projects } from "@/data";
import { ProjectDetails } from "./ProjectDetails";

export const ProjectsList = () => {
  return (
    <section className="flex flex-wrap gap-16 my-16">
      {projects.map((project) => (
        <ProjectDetails key={project.name} {...project} />
      ))}
    </section>
  );
};
