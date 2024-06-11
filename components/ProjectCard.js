import React from "react";
import Image from "next/image";
import Link from "next/link";
import TechStackPill from "./TechStackPill";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// Icons
import github from "@/public/social_media_icons/github.svg";
import web from "@/public/social_media_icons/web.svg";

function ProjectCard2({ project }) {
  return (
    <Link href={project.link}>
      <Card className="dark:bg-card-gray dark:border-white/10 cursor-pointer min-w-64 w-full h-full group flex flex-col">
        <CardHeader>
          <div className="text-sm font-mono text-flair">
            {project.year}
          </div>
          <div className="text-lg font-bold group-hover:underline">
            {project.name}
          </div>
          <CardDescription>
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-start gap-2 -mt-2">
            {project.stack &&
              project.stack.map((technology, index) => (
                <div key={index}>
                  <TechStackPill text={technology} />
                </div>
              ))}
          </div>
        </CardContent>
        <CardFooter className="grow flex items-end">
          <Button
            variant="outline"
            className="dark:bg-site-gray mr-2"
          >
            <Image
              src={github}
              width={15}
              height={15}
              className="mr-1"
            />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="dark:bg-site-gray dark:border-blue-500 dark:hover:bg-blue-500"
          >
            <Image
              src={web}
              width={15}
              height={15}
              className="mr-1"
            />
            Demo
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

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

export default ProjectCard2;
