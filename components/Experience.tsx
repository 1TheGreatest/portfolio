import React from "react";
import { experiences } from "@/data";
import { IoLocationSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdNorthEast } from "react-icons/md";
import { BlurFade } from "./ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="w-full px-[14vw] py-[11.4vh] bg-white">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl text-pageblack mb-9 text-center">
          Professional Experience
        </h1>

        <Accordion type="single" collapsible className="w-[65vw]">
          {experiences.map((experience, id) => (
            <BlurFade key={id} delay={0.04 * 6 + id * 0.05}>
              <AccordionItem value={id.toString()} className="mb-2">
                <AccordionTrigger className="rounded-sm px-1 sm:px-2 lg:px-4 sm:py-5 bg-trigger data-[state=open]:bg-triggersecondary transition-all hover:no-underline ">
                  <div className="grid grid-cols-3 w-[60vw] items-center text-xs md:text-base lg:text-lg text-white font-bold">
                    <div className="col-span-2">
                      <h1 className="hidden sm:block">
                        {experience.position} @ {experience.company}
                      </h1>
                      <h1 className="sm:hidden">
                        {experience.position} <br /> @ {experience.company}
                      </h1>
                    </div>

                    <div className="flex justify-end">
                      <h1>
                        {experience.start} - {experience.end}
                      </h1>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="rounded-sm bg-accorcontent px-2 md:px-3 py-4 my-2">
                  <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-5 lg:col-span-4 grid grid-rows-[0.3fr_3.2fr_0.5fr]">
                      <div className="flex px-1 items-center justify-between">
                        <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm text-white">
                          <IoLocationSharp />
                          <h1>{experience.location}</h1>
                          <br></br>
                          <FaExternalLinkSquareAlt />
                          <a
                            href={experience.href}
                            target="_blank"
                            rel="nofollow"
                          >
                            <h1>{experience.company}</h1>
                          </a>
                        </div>

                        <div className="lg:hidden">
                          <Avatar className="size-6 sm:size-8 m-auto">
                            <AvatarImage
                              src={experience.logoUrl}
                              alt={experience.company}
                              className="object-center"
                            />
                            <AvatarFallback>
                              {experience.company[0]}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      <div className="items-center text-xs md:text-sm lg:text-base text-white">
                        {experience.descriptions?.map((description, index) => (
                          <h1 key={index}>- {description}</h1>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1 lg:gap-2 py-2 items-center">
                        {experience.badges.map((badge, index) => (
                          <Badge
                            className="align-middle text-[0.5rem] md:text-xs rounded-lg bg-buttoncolor border border-buttonbordercolor hover:bg-buttoncolor"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center">
                      <div>
                        <Avatar className="size-30 m-auto">
                          <AvatarImage
                            src={experience.logoUrl}
                            alt={experience.company}
                            className="object-center"
                          />
                          <AvatarFallback>
                            {experience.company[0]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>

        <div className="flex w-[60vw] justify-end items-center group relative pr-2">
          <a
            href="resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <h3 className="text-xs md:text-base text-pageblack cursor-pointer">
              <span className="relative">
                View Full Résumé
                <span className="absolute bottom-0 left-0 w-0 h-px bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h3>
          </a>
          <MdNorthEast color="black" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
