import { useGLTF } from "@react-three/drei";
import { planeScene } from "../../assets";

export const PlaneModel = () => {
  const { scene } = useGLTF(planeScene);
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};
