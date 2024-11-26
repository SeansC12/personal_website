import React from "react";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";

function index({ project }) {
  return (
    <div>
      <CustomGlowingButton>
        As seen on CNA:
        <Link
          className="link break-all"
          href={project.awardLink}
        >
          {project.awardLink}
        </Link>
      </CustomGlowingButton>
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

export default index;

function CustomGlowingButton({ children }) {
  return (
    <div className="w-full flex items-center mt-5 mb-8 justify-center">
      <div className="relative inline-flex group grow justify-center">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#f0ad4e] to-orange-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
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
