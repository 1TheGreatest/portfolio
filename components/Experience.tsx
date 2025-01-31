import React from "react";
import { experiences } from "@/data";
import { IoLocationSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

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
      <div className="flex flex-col items-center ">
        <h1 className="font-extrabold text-4xl text-pageblack mb-[5.5vh] text-center">
          Professional Experience
        </h1>

        <Accordion type="single" collapsible className="w-[57vw]">
          {experiences.map((experience, id) => (
            <BlurFade key={experience.company} delay={0.04 * 6 + id * 0.05}>
              <AccordionItem value={experience.company} className="mb-2">
                <AccordionTrigger className="rounded-sm px-8 py-5 bg-trigger data-[state=open]:bg-triggersecondary transition-all hover:no-underline ">
                  <div className="flex w-[48vw] items-center justify-between text-lg text-white font-bold">
                    <h1>
                      {experience.position} @ {experience.company}
                    </h1>
                    <h1>
                      {experience.start} - {experience.end}
                    </h1>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="rounded-sm bg-accorcontent px-6 py-4 my-2">
                  <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-4 grid grid-rows-5">
                      <div className="flex gap-2 items-center text-base text-white">
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
                      <div className="row-span-3 items-center text-base text-white">
                        <h1>{experience.description}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        {experience.badges.map((badge, index) => (
                          <Badge
                            className="align-middle text-xs rounded-lg bg-buttoncolor border border-buttonbordercolor hover:bg-buttoncolor"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center ">
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
      </div>
    </section>
  );
};

export default Experience;
