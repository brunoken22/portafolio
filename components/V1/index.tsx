"use client";
import { Skill } from "@/components/V1/skill";
import Proyectos from "@/components/V1/proyectos";
import { Contact } from "@/components/V1/contact";
import ProgressBar from "@/components/V1/progress-bar";
import Main from "@/components/V1/main";
import Header from "./header";
import { useEffect, useState } from "react";
import { Project, ThemeType } from "../V2/types";

export default function V1({ proyect, data }: { proyect: Project[]; data: void }) {
  const [tema, setTema] = useState<ThemeType>("default");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.matches) {
      document.documentElement.classList.add("dark");
      return setTema("default");
    }
    document.documentElement.classList.remove("dark");
    setTema("light");
  }, []);

  const handleTema = () => {
    if (tema == "default") {
      setTema("light");
      document.documentElement.classList.remove("dark");
      return;
    }
    document.documentElement.classList.add("dark");

    setTema("default");
  };

  return (
    <ProgressBar>
      <Header tema={handleTema} defaultTheme={tema} />
      <Main />
      <Skill />
      <hr
        style={{
          width: "80%",
          backgroundColor: "#ddd",
          boxShadow: "#ddd 0px 100px 1000px 10px",
        }}
      />
      <Proyectos proyect={proyect} data={data} />
      <hr
        style={{
          width: "80%",
          backgroundColor: "#ddd",
          boxShadow: "#ddd 0px 100px 1000px 10px",
        }}
      />
      <Contact />
    </ProgressBar>
  );
}
