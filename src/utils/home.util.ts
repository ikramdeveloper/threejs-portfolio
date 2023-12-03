import { Vector3 } from "@react-three/fiber";

export const adjustIslandForScreenSize = () => {
  const screenPosition: Vector3 = [0, -6.5, -43];
  let screenScale: Vector3;

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
  } else {
    screenScale = [1, 1, 1];
  }

  return [screenScale, screenPosition];
};

export const adjustPlaneForScreenSize = () => {
  let screenScale: Vector3, screenPosition: Vector3;

  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition];
};
