import React from "react";
import Link from "next/link";

function index({ project }) {
  return (
    <div>
      <EachTextSection
        title="Overall software architecture"
        text={project.longDescription1}
      />

      <EachTextSection
        title="Docker"
        text={project.longDescription2}
      />

      <div className="mb-6">
        <span className="font-bold">
          <Link
            href="https://hub.docker.com/repository/docker/seanc12/pill-counting-py-server/general"
            className="link"
          >
            Flask Server Image
          </Link>{" "}
          |{" "}
          <Link
            href="https://hub.docker.com/repository/docker/seanc12/pill-counting-web"
            className="link"
          >
            React Image
          </Link>
        </span>
      </div>

      <EachTextSection
        title="YOLOv8 model"
        text={project.longDescription3}
      />

      <EachTextSection
        title="NVIDIA Jetson"
        text={project.longDescription4}
      />

      <EachTextSection
        title="Why was it built?"
        text={project.longDescription5}
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

function EachTextSection({ title, text }) {
  return (
    <div>
      <div className="font-bold font-mono text-flair text-xl mb-2">
        {title}
      </div>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD] mb-6"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
}
