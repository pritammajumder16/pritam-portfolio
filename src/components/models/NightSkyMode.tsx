import { useGLTF } from "@react-three/drei";
import { nightSkyScene } from "../../assets";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
  Vector3,
} from "three";

export const NightSkyModel = ({
  isRotating,
}: MeshProps & { isRotating: boolean }) => {
  const nightSky = useGLTF(nightSkyScene);
  const nightSkyRef =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);
  useFrame((_, delta) => {
    if (!isRotating) {
      if (nightSkyRef.current) nightSkyRef.current.rotation.y += -0.01 * delta;
    } else {
      if (nightSkyRef.current) nightSkyRef.current.rotation.y += -0.1 * delta;
    }
  });
  return (
    <mesh
      ref={nightSkyRef}
      position={[0, 0, -100]}
      scale={new Vector3(110, 110, 110)}
    >
      <primitive object={nightSky.scene}></primitive>
    </mesh>
  );
};
