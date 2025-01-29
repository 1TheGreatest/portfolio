import React from "react";
import ClientLogo from "./client-logos";
import { clients } from "@/data";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] pt-[21vh] bg-pageblack" id="home">
      <div className="flex w-[72vw] ml-[14vw] h-[50vh] mb-[8vh] justify-between">
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
