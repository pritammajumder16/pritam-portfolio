import { useGLTF } from "@react-three/drei";
import { birdScene } from "../../assets";

export const BirdModel = () => {
  const { scene } = useGLTF(birdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};
