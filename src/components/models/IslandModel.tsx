/* eslint-disable @typescript-eslint/no-explicit-any */

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { a } from "@react-spring/three";
import { useCallback, useEffect, useRef } from "react";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
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

type IslandModelProps = GroupProps & {
  isRotating: boolean;
  currentStage: number | null;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: React.Dispatch<React.SetStateAction<number | null>>;
};

// https://gltf.pmnd.rs/ converted to tsx from here
export const IslandModel = ({
  isRotating,
  setCurrentStage,
  setIsRotating,
  ...props
}: IslandModelProps) => {
  const { nodes, materials } = useGLTF(islandScene) as GLTFResult;
  const islandRef = useRef<THREE.Group>(null);
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;
    },
    [setIsRotating]
  );

  const handlePointerUp = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  const handlePointerMove = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
        if (islandRef.current) {
          islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        }
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isRotating, viewport.width]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.key === "ArrowLeft") {
        setIsRotating(true);
        if (islandRef.current) islandRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.007;
      } else if (e.key === "ArrowRight") {
        setIsRotating(true);
        if (islandRef.current) islandRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.007;
      }
    },
    [setIsRotating]
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );
  const handleTouchStart = useCallback((e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  const handleTouchMove = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
        if (islandRef.current)
          islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isRotating, viewport.width]
  );
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    gl,
    handleKeyDown,
    handleKeyUp,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  ]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      if (islandRef.current) {
        islandRef.current.rotation.y += rotationSpeed.current;
      }
    } else {
      if (!islandRef.current) {
        return;
      }
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
        setCurrentStage(4);
      } else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) {
        setCurrentStage(3);
      } else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) {
        setCurrentStage(2);
      } else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
        setCurrentStage(1);
      } else {
        setCurrentStage(null);
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
