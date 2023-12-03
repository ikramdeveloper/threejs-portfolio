import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "@/data";

export const ExperienceSection = () => {
  return (
    <section className="py-12 flex flex-col gap-10">
      <article className="flex flex-col gap-4">
        <h3 className="subhead-text">Work Experience</h3>
        <p className="text-slate-500">
          {" "}
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </p>
      </article>

      <article className="flex">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.company_name}
              date={exp.date}
              iconStyle={{ background: exp.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={exp.icon}
                    alt={exp.company_name}
                    className="w-7/12 h-7/12 object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: `8px solid ${exp.iconBg}`,
                boxShadow: "none",
              }}
            >
              <article>
                <h4 className="text-black text-xl font-poppins font-semibold">
                  {exp.title}
                </h4>
                <p className="text-black-500 font-medium text-base m-0">
                  {exp.company_name}
                </p>
              </article>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </article>
    </section>
  );
};
