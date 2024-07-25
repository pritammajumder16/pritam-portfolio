import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { a } from "@react-spring/three";
import { useRef } from "react";
import { Group, Object3DEventMap } from "three";
import { islandScene } from "../../assets";
type GLTFResult = GLTF & {
  nodes: {
    polySurface944_tree_body_0: THREE.Mesh;
    polySurface945_tree1_0: THREE.Mesh;
    polySurface946_tree2_0: THREE.Mesh;
    polySurface947_tree1_0: THREE.Mesh;
    polySurface948_tree_body_0: THREE.Mesh;
    polySurface949_tree_body_0: THREE.Mesh;
    pCube11_rocks1_0: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
  };
};
export const IslandModel = ({ ...props }) => {
  // https://gltf.pmnd.rs/ converted to tsx from here
  const { nodes, materials } = useGLTF(islandScene) as GLTFResult;
  const islandRef = useRef<Group<Object3DEventMap> | null>(null);
  return (
    <a.group {...props} ref={islandRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};
