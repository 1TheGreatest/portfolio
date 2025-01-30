import React from "react";
import ClientLogo from "./client-logos";
import { clients } from "@/data";
import { IoIosArrowForward } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] pt-[21vh] bg-pageblack" id="home">
      <div className="flex w-[72vw] ml-[14vw] h-[50vh] mb-[8vh] justify-between">
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
          <AvatarImage src="solo.png" />
          <AvatarFallback>Photo of Dev</AvatarFallback>
        </Avatar>
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
