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

// Selfie
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
import { ExternalLink } from "lucide-react";

export default function Home() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] =
    useState(0);

  return (
    <div>
      <Image
        src={me}
        id="home"
        className="w-40 aspect-square rounded-full mb-5"
      />
      <h1 className="mb-3">Hey, I'm Sean</h1>
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

      <div className="text-lg text-[#DDDDDD]">
        I’m a web developer with a strong interest in React
        and building scalable and robust backend systems. I
        am reaching 2 years of experience in web development
        with React.
        <br></br>
        <br></br>I am fascinated by the complex
        infrastructures of big software companies and how
        they can be so resilient. I learn by building apps
        that strive to perform tasks in the simplest and
        most resilient way possible. Check some of them out
        below.
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

      <div
        id="more"
        className="mt-12 text-3xl font-bold mb-6"
      >
        More
      </div>
      <ul>
        <Link
          href="https://docs.google.com/document/d/1GWuqDQz1kK_u7hb2Cu3F-1BYwtJO8n2HUiQFZQbqFTQ/edit?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <li className="list-disc ml-3 marker:text-neutral-500 text-lg text-[#98a0fa]">
            <div className="w-max hover:bg-[#98a0fa] hover:text-black">
              Resume
              <ExternalLink className="ml-2 h-4 w-4 inline mb-1" />
              <div className="h-[2px] bg-[#98a0fa] -mt-1" />
            </div>
          </li>
        </Link>
      </ul>

      {/* <ProjectModal
        open={isProjectOpen}
        setOpen={setIsProjectOpen}
        project={projects[openProjectIndex]}
      /> */}
    </div>
    // <K/div>
  );
}
