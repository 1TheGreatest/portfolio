"use client";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <GetInTouch />
      <Footer />
    </>
  );
}
