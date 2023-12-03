import { Dispatch, SetStateAction, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components/_shared";
import { BirdModel, IslandModel, PlaneModel, SkyModel } from "@/models";
import { adjustIslandForScreenSize, adjustPlaneForScreenSize } from "@/utils";

interface HeroProps {
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

export const Hero = ({ setCurrentStage }: HeroProps) => {
  const [isRotating, setIsRotating] = useState(false);

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <Canvas
      className={`w-full h-screen bg-transparent ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight groundColor="#000000" intensity={1} />

        <BirdModel />
        <SkyModel isRotating={isRotating} />
        <IslandModel
          setCurrentStage={setCurrentStage}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          position={islandPosition}
          scale={islandScale}
          rotation={[0.1, 4.7077, 0]}
        />
        <PlaneModel
          isRotating={isRotating}
          position={planePosition}
          scale={planeScale}
          rotation={[0, 20.1, 0]}
        />
      </Suspense>
    </Canvas>
  );
};
