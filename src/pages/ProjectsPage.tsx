import { CTA } from "@/components/_shared";
import { ProjectsIntro, ProjectsList } from "@/components/projects";

export const ProjectsPage = () => {
  return (
    <div className="max-container">
      <ProjectsIntro />
      <ProjectsList />

      <hr className="border-slate-200" />

      <CTA />
    </div>
  );
};
