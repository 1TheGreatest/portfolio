import React from "react";
import { experiences } from "@/data";
import WorkCard from "./ui/work-card";
import { BlurFade } from "./ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full h-[100vh] py-[11.4vh] bg-white overflow-auto"
    >
      <div className="flex flex-col w-[72vw] ml-[14vw] min-h-full items-center ">
        <h1 className="font-extrabold text-4xl text-pageblack mb-[5.5vh] text-center">
          Professional Experience
        </h1>

        <Accordion type="single" collapsible className="w-[57vw]">
          {experiences.map((experience, id) => (
            <BlurFade key={experience.company} delay={0.04 * 6 + id * 0.05}>
              <AccordionItem value={experience.company} className="mb-2">
                <AccordionTrigger className="rounded-sm h-[9.2vh] px-8 py-2 bg-trigger data-[state=open]:bg-triggersecondary transition-all hover:no-underline ">
                  <div className="flex w-[48vw] min-h-full items-center justify-between text-lg text-white font-bold">
                    <h1>
                      {experience.position} @ {experience.company}
                    </h1>
                    <h1>
                      {experience.start} - {experience.end}
                    </h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-sm h-[34vh] bg-accorcontent px-6 py-2 my-2">
                  <div className="grid grid-cols-5 min-h-full gap-3">
                    <div className="bg-green-300 col-span-4"></div>
                    <div className="flex-none bg-red-200 mt-10">
                      <Avatar className="size-30 m-auto">
                        <AvatarImage
                          src={experience.logoUrl}
                          alt={experience.company}
                          className="object-center"
                        />
                        <AvatarFallback>{experience.company[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* <WorkCard
              key={experience.company}
              logoUrl={experience.logoUrl}
              altText={experience.company}
              title={experience.company}
              position={experience.position}
              href={experience.href}
              badges={experience.badges}
              period={`${experience.start} - ${experience.end ?? "Present"}`}
              description={experience.description}
            /> */}
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;
