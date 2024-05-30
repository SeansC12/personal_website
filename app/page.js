"use client";

import { useState } from "react";
import Image from "next/image";

// Social Media Icons
import linkedin from "@/public/social_media_icons/linkedin.svg";
import github from "@/public/social_media_icons/github.svg";
import email from "@/public/social_media_icons/email.svg";

import {
  SocialMediaPill,
  SocialMediaPillWrapper,
} from "@/components/SocialMediaPill";

// Project Card
import ProjectCard from "@/components/ProjectCard";

// Project Modal
import ProjectModal from "@/components/ProjectModal";

// Projects
import projects from "@/lib/projects";

// Course Completions
import courseCompletions from "@/lib/CourseCompletions";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] =
    useState(0);

  return (
    <div>
      <div className="w-40 aspect-square bg-pink-500 rounded-full mb-5" />
      <h1 className="mb-3">Hey, I'm Sean</h1>
      <h4 className="mb-3">
        <i>Web Developer</i>
      </h4>
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

      <div className="mt-12 text-3xl font-bold mb-6">
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

      <div className="mt-12 text-3xl font-bold mb-6">
        Course Completions
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseCompletions.map((course, index) => (
          <div key={index}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {/* <ProjectModal
        open={isProjectOpen}
        setOpen={setIsProjectOpen}
        project={projects[openProjectIndex]}
      /> */}
    </div>
    // <K/div>
  );
}
