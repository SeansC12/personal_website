import React from "react";
import Link from "next/link";

function index({ project }) {
  return (
    <div>
      <div className="font-bold font-mono text-flair text-xl mb-2">
        Why was it built?
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD]"
      >
        {project.longDescription1}
      </div>
      <div className="font-bold font-mono text-flair text-xl mt-3 mb-2">
        Techy stuff
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD]"
      >
        {project.longDescription2}
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
