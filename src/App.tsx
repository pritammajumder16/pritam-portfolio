import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const darkModeColor = "#15202b";
    const lightModeColor = "##cbd5e133";

    const isDarkMode =
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.body.style.backgroundColor = darkModeColor;
    } else {
      document.body.style.backgroundColor = lightModeColor;
    }
  }, []);

  return (
    <main className="min-h-screen h-full">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
