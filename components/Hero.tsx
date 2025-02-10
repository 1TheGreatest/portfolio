import React from "react";
import ClientLogo from "./ui/client-logos";
import { clients } from "@/data";
import { IoIosArrowForward } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="w-full px-[14vw] pt-[21vh] pb-[11.4vh] bg-pageblack"
      id="home"
    >
      <div className="grid grid-cols-3 ">
        <div className="col-span-3 md:col-span-2 grid grid-rows-3 gap-7">
          <div className="row-span-2 md:pr-6 md:pt-10">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              Hi, I&apos;m Solomon 👋
            </h1>
            <h3 className="text-navfontcolor text-sm">
              I&apos;m a full-stack developer with experience building dynamic
              web applications, from designing scalable backends with Python and
              Node.js to crafting intuitive frontends with React and Next.js. I
              have a master&apos;s degree in Artificial Intelligence and Data
              Science and keen interest in using AI to solve complex problems.
            </h3>
          </div>

          <a href="#expertise">
            <button className="primary-btn px-14 py-3">
              <p className="text-xs md:text-base text-white font-bold">
                Let’s get started
              </p>
              <IoIosArrowForward color="white" />
            </button>
          </a>
        </div>

        <div className="hidden md:block rounded-full">
          <Avatar className="min-h-full min-w-full">
            <AvatarImage src="solo.png" className="object-fill" />
            <AvatarFallback>Dev</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h3 className="mt-5 md:mt-14 mb-5 text-white text-sm">Worked with</h3>
        <div className="flex gap-x-1 sm:gap-x-8">
          {clients.map((client, idx) => (
            <ClientLogo key={idx} svg={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
