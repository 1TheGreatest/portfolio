import Arrow from "@/components/ui/arrow";
import React from "react";
import Link from "next/link";
import { projects } from "@/data";
import ArrowLink from "@/components/ui/arrow-link";

const Archive = () => {
  return (
    <section id="projects" className="w-full min-h-screen px-12 py-16 bg-black">
      <div className="">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-buttoncolor"
          href="/"
        >
          <Arrow className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
          Solomon Ampomah
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>

        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-navcolor px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-navfontcolor">
                Projects
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-navfontcolor lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-navfontcolor sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, id) => (
              <tr
                key={id}
                className="border-b border-slate-300/10 last:border-none"
              >
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight hover:text-buttonbordercolor sm:hidden group/link text-base"
                        href={project.href || "#"}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        <span>
                          {project.title}
                          <ArrowLink />
                        </span>
                      </Link>
                    </div>
                    <div className="hidden sm:block">{project.title}</div>
                  </div>
                </td>

                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {project.technologies?.map((technology, index) => (
                      <li key={index} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-buttoncolor px-3 py-1 text-xs font-medium leading-5 text-white ">
                          {technology}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="hidden py-4 align-top sm:table-cell">
                  <Link
                    className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-buttonbordercolor  group/link text-sm"
                    href={project.href || "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} (opens in a new tab)`}
                  >
                    <span className="inline-block">
                      {project.title}
                      <ArrowLink />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Archive;
