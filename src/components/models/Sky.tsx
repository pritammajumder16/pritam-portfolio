import { useGLTF } from "@react-three/drei";
import { skyScene } from "../../assets";

export const SkyModel = () => {
  const sky = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={sky.scene}></primitive>
    </mesh>
  );
};
