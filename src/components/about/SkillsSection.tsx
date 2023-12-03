import { skills } from "@/data";

export const SkillsSection = () => {
  return (
    <section className="py-12 flex flex-col gap-10">
      <h3 className="subhead-text">My Skills</h3>

      <article className="flex flex-wrap gap-10">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <span className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
