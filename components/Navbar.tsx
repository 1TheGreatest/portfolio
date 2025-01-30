"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { navItems } from "@/data";

const Navbar = () => {
  // Initialize Lenis
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis only on the client side
    if (typeof window !== "undefined") {
      lenisRef.current = new Lenis();
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
    // Clean up when the component unmounts
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <section className="fixed w-full h-[10vh] bg-pageblack z-50">
      <div className="flex w-[86vw] ml-[6.6vw] h-[10vh] bg-navcolor rounded-b-lg items-center">
        <div className="flex ml-[7.4vw] w-[56vw] h-[2.6vh] text-navfontcolor text-sm justify-between">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              className="hover:text-md hover:text-white"
              onClick={() => lenisRef.current?.scrollTo(item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex ml-[7.4vw] w-[8.4vw] h-[2.6vh] justify-between">
          <a
            className="hover:text-slate-200"
            href="https://www.linkedin.com/in/solomon-ampomah-a67128141/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="linkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <Image
              src="/icons/linkedin.svg"
              alt="linkedIn"
              width={24}
              height={24}
            />
          </a>
          <a
            className="hover:text-slate-200"
            href="https://github.com/1TheGreatest"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github (opens in a new tab)"
            title="github"
          >
            <span className="sr-only">Github</span>
            <Image
              src="/icons/github.svg"
              alt="github"
              width={24}
              height={24}
            />
          </a>
          <Image
            src="/icons/linkedin.svg"
            alt="linkedIn"
            width={24}
            height={24}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
