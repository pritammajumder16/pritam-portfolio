import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import "./App.css";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
