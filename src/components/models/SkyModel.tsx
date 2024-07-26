import { useGLTF } from "@react-three/drei";
import { skyScene } from "../../assets";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

export const SkyModel = ({
  isRotating,
}: MeshProps & { isRotating: boolean }) => {
  const sky = useGLTF(skyScene);
  const skyRef =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);
  useFrame((_, delta) => {
    if (!isRotating) {
      if (skyRef.current) skyRef.current.rotation.y += -0.025 * delta;
    } else {
      if (skyRef.current) skyRef.current.rotation.y += -0.1 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene}></primitive>
    </mesh>
  );
};
