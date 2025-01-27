import React from "react";
import ClientLogo from "./client-logos";
import Image from "next/image";
import Lenis from "lenis";

const clients = [
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
];

const Hero = () => {
  // Initialize Lenis
  const lenis = new Lenis();
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return (
    <section className="w-full h-[100vh] bg-pageblack">
      <div className="flex w-[86vw] ml-[6.6vw] h-[10vh] bg-navcolor rounded-b-lg mb-[11vh] items-center">
        <div className="flex ml-[7.4vw] w-[56vw] h-[2.6vh] text-navfontcolor text-sm justify-between">
          <button className="hover:text-md hover:text-white">Home</button>
          <p className="hover:text-md hover:text-white">Case Studies</p>
          <p className="hover:text-md hover:text-white">Testimonials</p>
          <p
            className="hover:text-md hover:text-white"
            onClick={() => lenis.scrollTo("#projects")}
          >
            Recent Work
          </p>

          <a
            className="hover:text-md hover:text-white"
            onClick={() => lenis.scrollTo("#getInTouch")}
          >
            Get In Touch
          </a>
        </div>
        <div className="flex ml-[7.4vw] w-[8.4vw] h-[2.6vh] justify-between">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedIn"
            width={24}
            height={24}
          />
          <Image
            src="/icons/linkedin.svg"
            alt="linkedIn"
            width={24}
            height={24}
          />
          <Image
            src="/icons/linkedin.svg"
            alt="linkedIn"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="flex w-[72vw] ml-[14vw] h-[50vh] rounded-b-lg mb-[8vh] justify-between">
        <div className="w-[42vw] h-[35vh] mt-[7.4vh] bg-green-200"></div>
        <div className="w-[27.3vw] h-[50vh] bg-green-200 rounded-full"></div>
      </div>

      <div className="w-[72vw] ml-[14vw] h-[14vh] rounded-b-lg">
        <p className="mb-[2.5vh] text-white text-sm">Worked with</p>
        <div className="flex gap-[2.4vw]">
          {clients.map((client, idx) => (
            <ClientLogo key={idx} svg={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
