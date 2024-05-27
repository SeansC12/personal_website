import React from "react";
import projects from "@/lib/projects";
import Image from "next/image";

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
    <div className="px-64 py-14">
      <div className="flex items-center justify-start w-full gap-6">
        {project.image ? (
          <Image
            className="w-full aspect-square max-w-16 group-hover:opacity-80"
            src={project.image}
          />
        ) : (
          <div className="rounded-full hover:opacity-80 w-full max-w-36 aspect-square bg-pink-500" />
        )}
        <h2>{project.name}</h2>
        <div className="bg-pink-500 h-full w-full grow">
          hi
        </div>
      </div>
    </div>
  );
}

export default page;
