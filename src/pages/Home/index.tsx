import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import { Loader3d } from "../../components/Ui";
import {
  BirdModel,
  IslandModel,
  PlaneModel,
  SkyModel,
} from "../../components/models";
import { Euler, Vector3 } from "three";
import { HomeInfo } from "../../components/Shared";

const Home = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const [islandScale, islandPosition, islandRotation] = useMemo((): [
    Vector3,
    Vector3,
    Euler
  ] => {
    let screenScale: Vector3;
    const screenPosition: Vector3 = new Vector3(0, -6.5, -43);
    const rotation: Euler = new Euler(0.1, 4.7, 0);
    if (window.innerWidth < 768) {
      screenScale = new Vector3(0.9, 0.9, 0.9);
    } else {
      screenScale = new Vector3(1, 1, 1);
    }
    return [screenScale, screenPosition, rotation];
  }, []);
  const [planeScale, planePosition] = useMemo((): [Vector3, Vector3] => {
    let screenScale: Vector3;
    let screenPosition: Vector3;
    if (window.innerWidth < 768) {
      screenScale = new Vector3(1.5, 1.5, 1.5);
      screenPosition = new Vector3(0, -1.5, 0);
    } else {
      screenScale = new Vector3(3, 3, 3);
      screenPosition = new Vector3(0, -4, -4);
    }
    return [screenScale, screenPosition];
  }, []);
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating == true ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader3d />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight position={[1, 1, 1]} intensity={100} /> */}
          {/* <spotLight position={[1, 1, 1]} intensity={100} angle={45} /> */}
          <hemisphereLight
            color="#b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />
          <SkyModel isRotating={isRotating} />
          <IslandModel
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
          <BirdModel />
          <PlaneModel
            scale={planeScale}
            isRotating={isRotating}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
