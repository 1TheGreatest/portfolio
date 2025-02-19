"use client";
import React from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { backend, databases, frontend, others } from "@/data/index";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Expertise = () => {
  const [radius1, setRadius1] = useState(80);
  const [radius2, setRadius2] = useState(140);
  const [radius3, setRadius3] = useState(200);
  const [radius4, setRadius4] = useState(260);

  const isBase = useMediaQuery({ minWidth: 0, maxWidth: 639 }); // base
  const isSmall = useMediaQuery({ minWidth: 640, maxWidth: 767 }); // sm
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // md
  const isLarge = useMediaQuery({ minWidth: 1024 }); // lg

  useEffect(() => {
    if (isBase) {
      setRadius1(20);
      setRadius2(50);
      setRadius3(90);
      setRadius4(130);
    } else if (isSmall) {
      setRadius1(40);
      setRadius2(100);
      setRadius3(160);
      setRadius4(220);
    } else if (isMedium) {
      setRadius1(60);
      setRadius2(120);
      setRadius3(180);
      setRadius4(240);
    } else if (isLarge) {
      setRadius1(80);
      setRadius2(140);
      setRadius3(200);
      setRadius4(260);
    }
  }, [isBase, isSmall, isMedium, isLarge]);

  return (
    <section
      id="expertise"
      className="w-full h-[50vh] sm:h-[100vh] px-[10vw] sm:px-[14vw] py-[5vh] sm:py-[11vh] bg-white"
    >
      <div className="relative flex flex-col min-h-full items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Expertise
        </span>
        <OrbitingCircles
          className="size-4 sm:size-6 md:size-8 lg:size-10"
          radius={radius1}
          speed={0.5}
        >
          {frontend.map((item, idx) => (
            <Image key={idx} src={item.logo} alt="frontend logo" fill />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-4 sm:size-6 md:size-8 lg:size-10"
          radius={radius2}
          reverse
          speed={0.5}
        >
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
        <OrbitingCircles
          className="size-4 sm:size-6 md:size-8 lg:size-10"
          radius={radius3}
          speed={0.5}
        >
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
        <OrbitingCircles
          className="size-4 sm:size-6 md:size-8 lg:size-10"
          radius={radius4}
          reverse
          speed={0.5}
        >
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
