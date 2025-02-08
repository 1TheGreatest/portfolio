"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { navItems } from "@/data";
import { LuMenu } from "react-icons/lu";
import Github from "./ui/github";
import LinkedIn from "./ui/linkedIn";
import Instagram from "./ui/instagram";

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
      <div className="flex w-[86vw] ml-[6.6vw] h-[10vh] bg-navcolor rounded-b-lg items-center justify-between">
        <div className="hidden md:flex ml-[7.4vw] w-[56vw] h-[3.6vh] items-center justify-between">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              className="text-navfontcolor text-sm hover:text-md hover:text-white"
              onClick={() => lenisRef.current?.scrollTo(item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex md:hidden ml-[7.4vw] w-[56vw] h-[3.6vh] items-center">
          <LuMenu className="text-navfontcolor hover:text-slate-200 text-2xl" />
        </div>

        <div className="flex px-4 gap-4 h-[3.6vh] items-center">
          <a
            className="text-navfontcolor hover:text-slate-200"
            href="https://www.linkedin.com/in/solomon-ampomah-a67128141/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="linkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>
          <a
            className="text-navfontcolor hover:text-slate-200"
            href="https://github.com/1TheGreatest"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github (opens in a new tab)"
            title="github"
          >
            <span className="sr-only">Github</span>
            <Github />
          </a>
          <a
            className="text-navfontcolor hover:text-slate-200"
            href="https://github.com/1TheGreatest"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github (opens in a new tab)"
            title="github"
          >
            <span className="sr-only">Github</span>
            <Instagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
