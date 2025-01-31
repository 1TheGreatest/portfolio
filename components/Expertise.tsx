import React from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { backend, databases, frontend, others } from "@/data/index";
import Image from "next/image";

const Expertise = () => {
  return (
    <section id="expertise" className="w-full h-[100vh] py-[11.4vh] bg-white">
      <div className="relative flex w-[72vw] ml-[14vw] min-h-full flex-col items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Expertise
        </span>
        <OrbitingCircles iconSize={40} radius={100} speed={0.5}>
          {frontend.map((item, idx) => (
            <Image
              key={idx}
              src={item.logo}
              alt="frontend logo"
              width={40}
              height={40}
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={40} radius={160} reverse speed={0.5}>
          {backend.map((item, idx) => (
            <Image
              key={idx}
              src={item.logo}
              alt="backend logo"
              width={40}
              height={40}
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={40} radius={220} speed={0.5}>
          {databases.map((item, idx) => (
            <Image
              key={idx}
              src={item.logo}
              alt="database logo"
              width={40}
              height={40}
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={40} radius={280} reverse speed={0.5}>
          {others.map((item, idx) => (
            <Image
              key={idx}
              src={item.logo}
              alt={item.alt}
              width={40}
              height={40}
            />
          ))}
        </OrbitingCircles>
      </div>
    </section>
  );
};

export default Expertise;
