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
import bmw from "@/public/Drawing_of_BMW/F80.png";

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
      <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row-reverse gap-5 md:gap-10">
        <Image
          src={me}
          id="home"
          className="w-40 aspect-square rounded-full"
        />
        {/* <Image src={bmw} className="w-52" /> */}
        <div>
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
            I’m a web developer with a strong interest in
            React
            <br /> and building scalable and robust backend
            systems.
            {/* <br></br>
            <br></br>I am fascinated by the complex
            infrastructures of big software companies and
            how they can be so resilient. I learn by
            building apps that strive to perform tasks in
            the simplest and most resilient way possible. */}
          </div>
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
        <div className="w-max hover:bg-[#98a0fa] hover:text-black mt-12 text-3xl font-bold text-[#98a0fa] mb-6">
          Resume
          <ExternalLink className="ml-2 h-5 w-5 inline mb-1" />
        </div>
      </Link>
      <iframe
        className="w-full h-[800px]"
        src="https://docs.google.com/document/d/e/2PACX-1vQwRs11myfUDPg_lllHUkShFw7e56I95tnaZgn1omTGdd7uH1V1ZcqJwIbsOwd7u5VvHX_21VXTeMMc/pub?embedded=true"
      />

      {/* <ProjectModal
        open={isProjectOpen}
        setOpen={setIsProjectOpen}
        project={projects[openProjectIndex]}
      /> */}
    </div>
  );
}
