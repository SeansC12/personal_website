import React from "react";
import Link from "next/link";

const test = "<u>Test</u>";

function index({ project }) {
  return (
    <div>
      <div className="font-bold font-mono text-flair text-xl mb-2">
        Overall software architecture
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD] mb-6"
      >
        {project.longDescription1}
      </div>
      <div className="font-bold font-mono text-flair text-xl mb-2">
        Why was it built?
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD]"
        dangerouslySetInnerHTML={{
          __html: project.longDescription2,
        }}
      />
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
