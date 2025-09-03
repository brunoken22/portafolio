"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

const themes = {
  default: {
    background: "#0e141b",
    color: "#fff",
    lineaGradient:
      "linear-gradient(to right,rgba(14, 20, 27, 0.1) 20%,rgba(14, 20, 27, 0.9) 100% )",
  },
  light: {
    background: "#fff",
    color: "#000",
    weight: "true",
    lineaGradient:
      "linear-gradient(to right,rgba(255, 255, 255, 0.1)20%,rgba(255, 255, 255, 0.9)100% )",
  },
};
export function Layout({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<keyof typeof themes>("default");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.matches) {
      document.documentElement.classList.add("dark");
      return setTema("default");
    }
    document.documentElement.classList.remove("dark");
    setTema("light");
  }, []);

  return <ThemeProvider theme={themes[tema]}>{children}</ThemeProvider>;
}
