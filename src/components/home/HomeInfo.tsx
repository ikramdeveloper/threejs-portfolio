import { Link } from "react-router-dom";
import { arrow } from "@/assets/icons";

interface HomeInfoProps {
  currentStage: number;
}

export const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  let content = <></>;

  if (currentStage === 1)
    content = (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Ikram</span>
        👋
        <br />A Software Engineer from Pakistan
      </h1>
    );

  if (currentStage === 2) {
    content = (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    content = (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    content = (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return (
    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      {content}
    </div>
  );
};
