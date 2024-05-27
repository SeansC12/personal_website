"use client";

import { useState } from "react";
import Image from "next/image";

import background_image from "@/public/background_image.jpeg";

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

// Shadcn
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Projects
import projects from "@/lib/projects";

export default function Home() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] =
    useState(0);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-0 py-14 flex justify-center">
      <div className="max-w-[800px]">
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

        <div className="font-medium">
          I’m a web developer with a strong interest in
          React and building scalable and robust backend
          systems. I am reaching 2 years of experience in
          web development with React.
          <br></br>
          <br></br>I am fascinated by the complex
          infrastructures of big software companies and how
          they can be so resilient. I learn by building apps
          that strive to perform tasks in the simplest and
          most resilient way possible. Check some of them
          out below.
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
                console.log("opened");
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>{" "}
      <ProjectDialog
        open={isProjectOpen}
        setOpen={setIsProjectOpen}
      />
      {/* Div to put all the stuff in */}
    </div>
  );
}

function ProjectDialog({ open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] dark:bg-black dark:border-[#313131]">
        <DialogHeader>
          <h4>Edit profile</h4>
          <DialogDescription className="text-gray-600">
            Make changes to your profile here. Click save
            when you're done.
          </DialogDescription>
        </DialogHeader>
        <div>hi</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
