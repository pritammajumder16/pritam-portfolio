import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import "./App.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    const darkModeColor = "#15202b";
    const lightModeColor = "#f5f5f5";
    const isDarkMode =
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.body.style.backgroundColor = darkModeColor;
    } else {
      document.body.style.backgroundColor = lightModeColor;
    }
  }, [themeContext?.theme]);

  return (
    <main className="min-h-screen h-full">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
