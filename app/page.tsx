"use client";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ScrollProvider } from "@/components/scroll-context";
// import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <ScrollProvider>
      <>
        <Hero />
        <Experience />
        <Projects />
        <GetInTouch />
      </>
    </ScrollProvider>
  );
}
