import { useAnimations, useGLTF } from "@react-three/drei";
import { planeScene } from "../../assets";
import { MeshProps } from "@react-three/fiber";
import { useEffect } from "react";

import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

type PlaneModelProps = MeshProps & {
  isRotating: boolean;
};

export const PlaneModel = ({ isRotating, ...props }: PlaneModelProps) => {
  const { scene, animations } = useGLTF(planeScene);
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    console.log(isRotating);
    const action = actions[names[0]];
    if (isRotating) {
      action?.fadeIn(0.5).play();
    } else {
      action?.fadeOut(0.5).stop();
    }
  }, [actions, names, isRotating]);

  return (
    <mesh
      {...props}
      ref={
        ref as
          | React.RefObject<
              Mesh<
                BufferGeometry<NormalBufferAttributes>,
                Material | Material[],
                Object3DEventMap
              >
            >
          | undefined
      }
    >
      <primitive object={scene} />
    </mesh>
  );
};
