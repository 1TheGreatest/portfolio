import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { projects } from "@/data";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { CiGlobe } from "react-icons/ci";
import { Badge } from "./ui/badge";
import { MdNorthEast } from "react-icons/md";

const Projects = () => {
  return (
    <section id="projects" className="w-full px-[14vw] py-[11.4vh] bg-black">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-4xl text-white mb-[1.5vh] text-center">
          Projects
        </h1>
        <h3 className="text-navfontcolor text-sm mb-[5.7vh] text-center">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </h3>

        <div className="grid grid-cols-2 gap-4 ">
          {projects.slice(0, 4).map((project, id) => (
            <div key={id} className="flex h-full justify-center">
              <BlurFade key={project.title} delay={0.04 * 12 + id * 0.05}>
                <Card
                  className={
                    "flex flex-col w-[30vw] h-full overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out"
                  }
                >
                  <Link
                    href={project.href || "#"}
                    className="block cursor-pointer"
                  >
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                      />
                    )}
                  </Link>
                  <CardHeader>
                    <div className="space-y-1">
                      <CardTitle className="mt-1 text-base">
                        {project.title}
                      </CardTitle>
                      <time className="font-sans text-xs">{project.dates}</time>
                      <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {project.description}
                      </Markdown>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {project.iconLists && project.iconLists.length > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {project.iconLists?.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-black/[.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <Image
                                src={icon}
                                alt="icon5"
                                className="p-2"
                                width={32}
                                height={32}
                              />
                            </div>
                          ))}
                        </div>

                        <div className="">
                          <Link href={project.link} target="_blank">
                            <Badge className="flex gap-2 px-2 py-1 text-[12px]">
                              <CiGlobe />
                              Website
                            </Badge>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          ))}
        </div>

        <div className="flex p-4 justify-end items-center group relative pr-2">
          <Link
            href="/archive"
            rel="noreferrer noopener"
            aria-label="View Full Project Archive"
          >
            <h3 className="text-base text-white cursor-pointer">
              <span className="relative">
                View Full Project Archive
                <span className="absolute bottom-0 left-0 w-0 h-px bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h3>
          </Link>
          <MdNorthEast color="white" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
