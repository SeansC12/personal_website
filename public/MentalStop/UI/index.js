import React from "react";
import Link from "next/link";
import GlowingCard from "@/components/GlowingCard";

function index({ project }) {
  return (
    <div>
      <GlowingCard>
        As seen on CNA:
        <Link
          className="link break-all"
          href={project.awardLink}
        >
          {project.awardLink}
        </Link>
      </GlowingCard>
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
