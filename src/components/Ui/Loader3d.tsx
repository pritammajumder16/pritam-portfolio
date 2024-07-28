import { Html } from "@react-three/drei";

const Loader3d = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-20 h-20 border-4 border-opacity-20 border-blue-500 border-t-blue-500/50 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader3d;
