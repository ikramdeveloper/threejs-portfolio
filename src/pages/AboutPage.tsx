import { CTA } from "@/components/_shared";
import {
  ExperienceSection,
  AboutIntro,
  SkillsSection,
} from "@/components/about";

export const AboutPage = () => {
  return (
    <div className="max-container">
      <AboutIntro />
      <SkillsSection />
      <ExperienceSection />

      <hr className="border-slate-200" />

      <CTA />
    </div>
  );
};
