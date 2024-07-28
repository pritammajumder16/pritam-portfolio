/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import * as process from "process";
import Spinner from "./components/Ui/Spinner.tsx";
import { ThemeContextProvider } from "./Context/ThemeContext.tsx";
(window as any).global = window;
(window as any).process = process;
(window as any).Buffer = [];
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </ThemeContextProvider>
  </React.StrictMode>
);
