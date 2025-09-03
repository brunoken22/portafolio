"use client";
import { Container, DivContainer } from "@/ui/contenedores";
import React, { useRef } from "react";

export default function ProgressBar({ children }: { children: React.ReactNode }) {
  const handleContaner = useRef<HTMLDivElement>(null);
  const handleScroll = useRef<HTMLDivElement>(null);

  const handlescrol = () => {
    if (!handleContaner.current || !handleScroll.current) return;

    let scrollbar = -handleContaner.current.getBoundingClientRect().top;
    let progressWidth =
      (scrollbar /
        (handleContaner.current.getBoundingClientRect().height -
          document.documentElement.clientHeight)) *
      100;
    let value = Math.floor(progressWidth);
    handleScroll.current.style.width = `${value}%`;
    if (value > 0) {
      handleScroll.current.style.width = "0% !important";
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handlescrol);
  }
  return (
    <>
      {" "}
      <div className='progress-bar' ref={handleScroll}></div>
      <Container ref={handleContaner}>
        <DivContainer>{children}</DivContainer>
      </Container>
    </>
  );
}
