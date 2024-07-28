import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import "./App.css";

function App() {
  return (
    <main className="bg-slate-300/20 dark:bg-black-400 min-h-screen h-full">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
