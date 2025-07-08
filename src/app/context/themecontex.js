"use client";

import { createContext, useState } from "react";

export const ThemContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemContext.Provider value={{ toggle, mode }}>
      <div className={` theme ${mode}`}>{children}</div>
    </ThemContext.Provider>
  );
};
