import { Canvas } from "@react-three/fiber";
import {
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Loader3d } from "../../components/Ui";
import {
  BirdModel,
  IslandModel,
  PlaneModel,
  SkyModel,
} from "../../components/models";
import { Euler, Vector3 } from "three";
import { HomeInfo } from "../../components/Shared";
import { codePhatGayaMp3 } from "../../assets";
import { SoundOffIcon, SoundOnIcon } from "../../assets/staticImages";
import { ThemeContext } from "../../Context/ThemeContext";
import { Lightmode, DarkMode } from "../../assets/svgComponents";
import { NightSkyModel } from "../../components/models/NightSkyMode";

const Home = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(new Audio(codePhatGayaMp3));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    const musicRef = audioRef;
    return () => {
      musicRef.current.pause();
    };
  }, [isPlayingMusic]);

  const [islandScale, islandPosition, islandRotation] = useMemo(() => {
    const screenPosition = new Vector3(0, -6.5, -43);
    const rotation = new Euler(0.1, 4.7, 0);
    const screenScale =
      window.innerWidth < 768
        ? new Vector3(0.9, 0.9, 0.9)
        : new Vector3(1, 1, 1);
    return [screenScale, screenPosition, rotation];
  }, []);

  const [planeScale, planePosition] = useMemo(() => {
    const screenScale =
      window.innerWidth < 768
        ? new Vector3(1.5, 1.5, 1.5)
        : new Vector3(3, 3, 3);
    const screenPosition =
      window.innerWidth < 768
        ? new Vector3(0, -1.5, 0)
        : new Vector3(0, -4, -4);
    return [screenScale, screenPosition];
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      themeContext?.setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      themeContext?.setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    if (themeContext?.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      themeContext?.setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      themeContext?.setTheme("dark");
    }
  };

  return (
    <section className="w-full overflow-y-hidden h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        shadows
      >
        <Suspense fallback={<Loader3d />}>
          {themeContext?.theme === "light" ? (
            <>
              <directionalLight
                position={[1, 1, 1]}
                intensity={2}
                castShadow
                shadow-camera-near={0.5} // Adjusted for better shadow rendering
                shadow-camera-far={500}
              />
              <ambientLight intensity={0.5} />
              <hemisphereLight
                color="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />
              <SkyModel isRotating={isRotating} />
            </>
          ) : (
            <>
              <directionalLight
                position={[1, 1, 1]}
                intensity={1}
                color="#555"
                castShadow
                shadow-mapSize-width={2048} // Increased for better shadow quality
                shadow-mapSize-height={2048}
                shadow-camera-near={0.5} // Adjusted for better shadow rendering
                shadow-camera-far={500}
              />
              <ambientLight intensity={0.2} />
              <hemisphereLight
                color="#444"
                groundColor="#000000"
                intensity={0.5}
              />
              <NightSkyModel isRotating={isRotating} />
            </>
          )}
          <IslandModel
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            receiveShadow
            setCurrentStage={setCurrentStage}
          />
          <BirdModel castShadow />
          <PlaneModel
            castShadow
            scale={planeScale}
            isRotating={isRotating}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-14 left-2">
        <img
          src={!isPlayingMusic ? SoundOffIcon : SoundOnIcon}
          alt="sound"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="size-12 cursor-pointer object-contain"
        />
      </div>
      <button
        id="theme-toggle"
        type="button"
        onClick={handleThemeToggle}
        className="text-gray-100 absolute bottom-14 right-2 dark:text-black-400 bg-black-300 dark:bg-gray-100 focus:outline-none rounded-full text-sm p-4"
      >
        {themeContext?.theme === "dark" ? <Lightmode /> : <DarkMode />}
      </button>
    </section>
  );
};

export default Home;
