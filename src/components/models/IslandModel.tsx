/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { a } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { Group, Object3DEventMap } from "three";
import { islandScene } from "../../assets";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
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
type IslandModelProps = GroupProps & {
  isRotating: React.MutableRefObject<boolean>;
};

// https://gltf.pmnd.rs/ converted to tsx from here
export const IslandModel = ({ isRotating, ...props }: IslandModelProps) => {
  const { nodes, materials } = useGLTF(islandScene) as GLTFResult;
  const islandRef = useRef<Group<Object3DEventMap> | null>(null);
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const handlePointerDown = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    isRotating.current = true;
    lastX.current = e.clientX;
  };

  const handlePointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    isRotating.current = false;
  };
  const handlePointerMove = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating.current == true) {
      const clientX = e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      if (islandRef.current) {
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      }
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      isRotating.current = true;
      if (islandRef.current) islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      isRotating.current = true;
      if (islandRef.current) islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      isRotating.current = false;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl]);
  useFrame(() => {
    if (isRotating.current == false) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      } else {
        if (!islandRef.current) return;
        const rotation = islandRef.current.rotation.y;
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the island's orientation
        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  });
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
