import { useEffect, useRef, useState } from "react";
import { Hero, HomeInfo } from "@/components/home";
import { soundoff, soundon } from "@/assets/icons";
import sakura from "@/assets/sakura.mp3";

export const HomePage = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const audioRefCurrent = audioRef.current;

    if (isPlayingMusic) {
      audioRefCurrent.play();
    }

    return () => {
      audioRefCurrent.pause();
    };
  }, [isPlayingMusic]);

  return (
    <div className="w-full h-screen relative">
      <HomeInfo currentStage={currentStage} />
      <Hero setCurrentStage={setCurrentStage} />

      <figure className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </figure>
    </div>
  );
};
