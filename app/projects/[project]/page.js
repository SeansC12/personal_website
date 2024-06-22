"use client";

import React from "react";
import projects from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Pill
import TechStackPill from "@/components/TechStackPill";

// Icons
import github from "@/public/social_media_icons/github.svg";
import web from "@/public/social_media_icons/web.svg";

// App Image Carousel
import { AppImageCarousel } from "@/components/AppImageCarousel";

// Shadcn
import { Card, CardHeader } from "@/components/ui/card";

// Get project information function
function getProjectObject(projects, name) {
  for (const element of projects) {
    if (element.url_shortened.toLowerCase() === name) {
      return element;
    }
  }
}

function page({ params }) {
  const project = getProjectObject(
    projects,
    params.project
  );
  return (
    <div className="w-full lg:w-[800px]">
      <div className="flex justify-between mb-3">
        <div className="flex items-center justify-center gap-3">
          {project.image && (
            <Image
              className="w-full aspect-square max-w-16"
              src={project.image}
            />
          )}
          <h2>{project.name}</h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {project.stack &&
              project.stack.map((technology, index) => (
                <div key={index}>
                  <TechStackPill text={technology} />
                </div>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={project.project_link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              variant="outline"
              className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 text-lg h-max mr-3"
            >
              <Image
                src={web}
                width={25}
                height={25}
                className="mr-2"
              />
              Open
            </Button>
          </Link>
          <Link
            href={project.github_link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              variant="outline"
              className="dark:bg-site-gray text-lg h-max"
            >
              <Image
                src={github}
                width={25}
                height={25}
                className="mr-2"
              />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      <AppImageCarousel
        images={project.appImages}
        name={project.name}
      />
      {project.name === "MentalStop" ? (
        <CustomGlowingButton>
          As seen on CNA:
          <Link className="link" href={project.awardLink}>
            {project.awardLink}
          </Link>
        </CustomGlowingButton>
      ) : (
        <></>
      )}
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD]"
      >
        {project.longDescription}
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="font-mono text-flair"
      >
        {"\n"}Tip: More information on the project is on its{" "}
        <Link
          href={project.github_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <u>Github repo</u>
        </Link>
        . Please check it out.
      </div>
    </div>
  );
}

function CustomGlowingButton({ children }) {
  return (
    <div class="w-full flex items-center mt-5 mb-8 justify-center">
      <div class="relative inline-flex group grow justify-center">
        <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#f0ad4e] to-orange-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Card
          variant="outline"
          className="relative hover:dark:bg-site-gray dark:bg-site-gray flex gap-1 cursor-default w-full"
        >
          <CardHeader className="w-full flex items-center">
            {children}
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default page;
