/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGLTF } from "@react-three/drei";
import { planeScene } from "../../assets";
import { MeshProps } from "@react-three/fiber";

type PlaneModelProps = MeshProps & {
  isRotating: React.MutableRefObject<boolean>;
};

export const PlaneModel = ({ isRotating, ...props }: PlaneModelProps) => {
  const { scene } = useGLTF(planeScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
