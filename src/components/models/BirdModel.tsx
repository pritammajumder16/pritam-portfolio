import { useAnimations, useGLTF } from "@react-three/drei";
import { birdScene } from "../../assets";
import { useEffect } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export const BirdModel = ({ ...props }) => {
  const { scene, animations } = useGLTF(birdScene);
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    const animationName = names[0];
    const action = actions[animationName];
    action?.play();
  }, [actions, names]);
  useFrame(({ clock, camera }) => {
    if (!ref.current) {
      return;
    }
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y == 0) {
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });
  return (
    <group
      {...props}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
      ref={ref as React.RefObject<Group>}
    >
      <primitive object={scene} />
    </group>
  );
};
