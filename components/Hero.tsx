import React from "react";
import ClientLogo from "./ui/client-logos";
import { clients } from "@/data";
import { IoIosArrowForward } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <section
      className="w-full px-[14vw] pt-[21vh] pb-[11.4vh] bg-pageblack"
      id="home"
    >
      <div className="flex mb-14 justify-between">
        <div className="grid grid-rows-3 w-[42vw] h-[35vh] mt-[7.4vh] gap-7">
          <div className="row-span-2 bg-red-100">Name</div>
          <a href="#expertise">
            <button className="primary-btn w-[24vw] h-[7.2vh]">
              <p className="text-base text-white font-bold">
                Let’s get started
              </p>
              <IoIosArrowForward color="white" />
            </button>
          </a>
        </div>

        <Avatar className="w-[27.3vw] h-[50vh]">
          <AvatarImage src="solo.png" className="object-fill" />
          <AvatarFallback>Dev</AvatarFallback>
        </Avatar>
      </div>

      <div>
        <h3 className="mb-5 text-white text-sm">Worked with</h3>
        <div className="flex gap-8">
          {clients.map((client, idx) => (
            <ClientLogo key={idx} svg={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
