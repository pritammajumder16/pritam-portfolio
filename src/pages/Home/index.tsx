import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader3d } from "../../components/Ui";
import { Island } from "../../assets/models/Island";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Pop up
      </div> */
}
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale: number[];
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
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
          <Island
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
