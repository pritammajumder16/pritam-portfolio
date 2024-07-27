import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { foxScene } from "../../assets";
import { GroupProps } from "@react-three/fiber";
import { FoxActions } from "../../types/types";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
  };
};
type FoxModelProps = GroupProps & {
  currentAnimation?: FoxActions;
};
export const FoxModel = ({ currentAnimation, ...props }: FoxModelProps) => {
  const foxRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(foxScene) as GLTFResult;
  const { actions, names } = useAnimations(animations, foxRef);
  useEffect(() => {
    names.forEach((name) => {
      actions[name]?.stop();
    });
    if (currentAnimation && actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, names, currentAnimation]);
  return (
    <group ref={foxRef} {...props}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
};
