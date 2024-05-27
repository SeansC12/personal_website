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

// Get project information function
function getProjectObject(projects, name) {
  for (const element of projects) {
    if (element.name.toLowerCase() === name) {
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
          <Button
            variant="outline"
            className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 text-lg h-max mr-3"
          >
            <Image
              src={web}
              width={30}
              height={30}
              className="mr-1"
            />
            Open
          </Button>
          <Button
            variant="outline"
            className="dark:bg-site-gray text-lg h-max"
          >
            <Image
              src={github}
              width={30}
              height={30}
              className="mr-1"
            />
            GitHub
          </Button>
        </div>
      </div>
      <AppImageCarousel images={project.appImages} />
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-gray-400"
      >
        {project.longDescription}
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="font-mono text-flair"
      >
        {"\n"}Tip: More information on the project is on its{" "}
        <Link href="">
          <u>Github repo</u>
        </Link>
        . Please check it out.
      </div>
    </div>
  );
}

export default page;
