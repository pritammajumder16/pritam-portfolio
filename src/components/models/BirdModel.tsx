import { useAnimations, useGLTF } from "@react-three/drei";
import { birdScene } from "../../assets";
import { useEffect } from "react";
import { Group } from "three";

export const BirdModel = () => {
  const { scene, animations } = useGLTF(birdScene);
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    const animationName = names[0];
    const action = actions[animationName];
    action?.play();
  }, [actions, names]);

  return (
    <group
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
      ref={ref as React.RefObject<Group>}
    >
      <primitive object={scene} />
    </group>
  );
};
