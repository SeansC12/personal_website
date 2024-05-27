import React from "react";
import Image from "next/image";
import Link from "next/link";
import TechStackPill from "./TechStackPill";

function ProjectCard({ project }) {
  return (
    <div className="flex-1 flex items-center justify-start flex-col gap-4 transition-all">
      <div className="flex items-center justify-center flex-col min-w-44 w-full h-full cursor-pointer gap-4 group rounded-xl p-4">
        {project.image ? (
          <Image
            className="w-full aspect-square max-w-36 group-hover:opacity-80"
            src={project.image}
          />
        ) : (
          <div className="rounded-full hover:opacity-80 w-full max-w-36 aspect-square bg-pink-500" />
        )}
        <div className="font-bold transition duration-300 group-hover:text-yellow-400">
          {project.name}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400 rounded-full" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 -mt-2">
          {project.stack &&
            project.stack.map((technology, index) => (
              <div key={index}>
                <TechStackPill text={technology} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
