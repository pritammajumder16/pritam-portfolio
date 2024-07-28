import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
export const ThemeContext = createContext<
  | {
      theme: string;
      setTheme: Dispatch<SetStateAction<string>>;
    }
  | undefined
>(undefined);
export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const darkModeColor = "#15202b";
  const lightModeColor = "#cbd5e1";
  useEffect(() => {
    const storedTheme = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = darkModeColor;
    } else {
      setTheme("light");
      document.body.style.backgroundColor = lightModeColor;
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
