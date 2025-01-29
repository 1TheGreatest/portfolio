import React from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import Icons from "@/data/orbit";

const Expertise = () => {
  return (
    <section id="expertise" className="w-full h-[100vh] py-[11.4vh] bg-white">
      <div className="relative flex w-[72vw] ml-[14vw] min-h-full flex-col items-center justify-center overflow-hidden">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Expertise
        </span>

        <OrbitingCircles iconSize={40}>
          <Icons.whatsapp />
          <Icons.notion />
          <Icons.openai />
          <Icons.googleDrive />
          <Icons.whatsapp />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <Icons.whatsapp />
          <Icons.notion />
          <Icons.openai />
          <Icons.googleDrive />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={220} reverse speed={2}>
          <Icons.whatsapp />
          <Icons.openai />
        </OrbitingCircles>
      </div>
    </section>
  );
};

export default Expertise;
