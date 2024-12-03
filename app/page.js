"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Social Media Icons
import linkedin from "@/public/social_media_icons/linkedin.svg";
import github from "@/public/social_media_icons/github.svg";
import email from "@/public/social_media_icons/email.svg";

import {
  SocialMediaPill,
  SocialMediaPillWrapper,
} from "@/components/SocialMediaPill";

// Pictures of me
import me from "@/public/Selfie/Me.jpg";

// Project Card
import ProjectCard from "@/components/ProjectCard";

// Project Modal
import ProjectModal from "@/components/ProjectModal";

// Projects
import projects from "@/lib/projects";

// Course Completions
import courseCompletions from "@/lib/CourseCompletions";
import CourseCard from "@/components/CourseCard";

// Lucide-icons
import {
  ExternalLink,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

// Shadcn
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

import GlowingButton from "@/components/GlowingButton";

export default function Home() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] =
    useState(0);

  return (
    <div>
      <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row-reverse gap-5 md:gap-36">
        <Image
          src={me}
          id="home"
          className="w-32 min-w-32 md:w-48 md:min-w-48 aspect-square rounded-full"
        />
        {/* <Image src={bmw} className="w-52" /> */}
        <div>
          <h1 className="mb-5 text-4xl md:text-5xl">
            Hey, I&apos;m Sean
          </h1>
          <SocialMediaPillWrapper>
            <SocialMediaPill
              icon={linkedin}
              link="https://www.linkedin.com/in/sean-chua-142a17265/"
            />
            <SocialMediaPill
              icon={github}
              link="https://github.com/SeansC12"
            />
            <SocialMediaPill
              icon={email}
              link="mailto:sean.ulric.chua@gmail.com"
            />
          </SocialMediaPillWrapper>

          <div className="text-lg text-[#DDDDDD] mb-5">
            I’m a web developer with a strong interest in
            React and building scalable and robust backend
            systems. Welcome to my tech grove. 💻🌳
            {/* <br></br>
            <br></br>I am fascinated by the complex
            infrastructures of big software companies and
            how they can be so resilient. I learn by
            building apps that strive to perform tasks in
            the simplest and most resilient way possible. */}
          </div>
          <Link href="/me">
            <GlowingButton>
              Learn more about who I am
              <ChevronRight
                className="h-6 w-6"
                // strokeWidth={3}
              />
            </GlowingButton>
          </Link>
        </div>
      </div>

      <div
        id="projects"
        className="mt-12 text-3xl font-bold mb-6"
      >
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[860px]:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            className="flex-1"
            key={index}
            onClick={() => {
              setIsProjectOpen(true);
              setOpenProjectIndex(index);
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div
        id="course"
        className="mt-12 text-3xl font-bold mb-6"
      >
        Course Completions
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseCompletions.map((course, index) => (
          <div key={index}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {/* <div
        id="more"
        className="mt-12 text-3xl font-bold mb-6"
      >
        Resume
      </div> */}
      <Link
        id="more"
        href="https://docs.google.com/document/d/1GWuqDQz1kK_u7hb2Cu3F-1BYwtJO8n2HUiQFZQbqFTQ/edit?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="w-max link mt-12 text-3xl font-bold  mb-6 cursor-pointer">
          CV
          <ExternalLink className="ml-2 h-5 w-5 inline mb-1" />
        </div>
      </Link>
      <iframe
        className="hidden md:block w-full h-[1200px]"
        src="https://docs.google.com/document/d/e/2PACX-1vSxqy0XHNnXEShc6dt7msh4VkGvXZ5JBXSbz-po8UeB22ObA7EhaubKYE0-f1Ly2w/pub?embedded=true"
      ></iframe>
      <Alert
        variant="outline"
        className="block md:hidden dark:border-red-500 dark:text-red-500"
      >
        <AlertCircle className="h-4 w-4 dark:stroke-red-500" />
        <AlertTitle className="dark:text-red-500 mb-0">
          Resume PDF embed only available on desktop
        </AlertTitle>
      </Alert>

      {/* <ProjectModal
        open={isProjectOpen}
        setOpen={setIsProjectOpen}
        project={projects[openProjectIndex]}
      /> */}
    </div>
  );
}
