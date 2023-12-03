import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@/components/_shared";
import { FoxModel } from "@/models";

interface ContactCanvasProps {
  currentAnimation: string;
}

export const ContactCanvas = ({ currentAnimation }: ContactCanvasProps) => {
  return (
    <section className="w-full lg:w-1/2 h-80 md:h-96 lg:h-auto">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <directionalLight position={[0, 0, 1]} intensity={2.5} />
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 0]} intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />

        <Suspense fallback={<Loader />}>
          <FoxModel
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.629, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
