"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { navItems } from "@/data";
import { LuMenu, LuX } from "react-icons/lu";
import Github from "./ui/github";
import LinkedIn from "./ui/linkedin";
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed w-full h-[10vh] bg-pageblack z-50 top-0 start-0">
      <div className="flex w-[86vw] ml-[6.6vw] h-[10vh] bg-navcolor rounded-b-lg items-center justify-between">
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <div className="flex md:hidden ml-[7.4vw] w-[56vw] h-[3.6vh] items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <LuX className="text-navfontcolor hover:text-slate-200 text-2xl" />
            ) : (
              <LuMenu className="text-navfontcolor hover:text-slate-200 text-2xl" />
            )}
          </button>
        </div>

        {/* Social Links */}
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
            href="https://www.instagram.com/solo_thegreatest?igsh=ZmNuNDVoaWd0Z29i&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
            title="instagram"
          >
            <span className="sr-only">Github</span>
            <Instagram />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[10vh] left-[6.6vw] w-[86vw] bg-navcolor rounded-b-lg shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  className="text-navfontcolor text-sm hover:text-md hover:text-white"
                  onClick={() => {
                    lenisRef.current?.scrollTo(item.id);
                    setIsOpen(false); // Close menu on click
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
