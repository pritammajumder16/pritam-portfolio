import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader3d } from "../../components/Ui";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Pop up
      </div> */
}
const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader3d />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <hemisphereLight />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
