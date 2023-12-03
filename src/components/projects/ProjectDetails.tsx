import { arrow } from "@/assets/icons";
import { Link } from "react-router-dom";

interface ProjectDetailsProps {
  iconUrl: string;
  name: string;
  theme: string;
  description: string;
  link: string;
}

export const ProjectDetails = ({
  iconUrl,
  name,
  theme,
  description,
  link,
}: ProjectDetailsProps) => {
  return (
    <article className="w-full lg:w-96 flex flex-col gap-4">
      <div className="block-container w-12 h-12">
        <span className={`btn-back rounded-xl ${theme}`} />
        <figure className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={iconUrl}
            alt={name}
            className="w-1/2 h-1/2 object-contain"
          />
        </figure>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-poppins font-semibold">{name}</h4>
        <p className="text-slate-500">{description}</p>
        <Link
          to={link}
          target="_blank"
          className="font-semibold text-blue-600 flex items-center gap-2 font-poppins"
        >
          Visit{" "}
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    </article>
  );
};
