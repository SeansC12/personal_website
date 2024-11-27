import React from "react";
import Link from "next/link";
import Image from "next/image";

import FlashingJetson from "@/public/PillVision/DescriptionImages/Flashing_Jetson.jpeg";
import BrokenOS from "@/public/PillVision/DescriptionImages/Broken_OS.jpeg";
import Jetson from "@/public/PillVision/DescriptionImages/Jetson.jpeg";

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
        title="NVIDIA Jetson"
        text={project.longDescription3}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-3">
          <div>
            <Image src={Jetson} />
            <div className="text-center text-sm text-gray-400 mt-2">
              The Jetson Nano 4GB.
            </div>
            <Image src={BrokenOS} />
            <div className="text-center text-sm text-gray-400 mt-2">
              Jetson could not boot up due to broken SD card
              reader with OS inside.
            </div>
          </div>
          <div>
            <Image src={FlashingJetson} />
            <div className="text-center text-sm text-gray-400 mt-2">
              Flashing the NVIDIA Jetson using SDK Manager
              on an Ubuntu x86 laptop.
            </div>
          </div>
        </div>
      </EachTextSection>

      <EachTextSection
        title="YOLOv8 model"
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

function EachTextSection({ title, text, children }) {
  return (
    <div className="w-full">
      <div className="font-bold font-mono text-flair text-xl mb-2">
        {title}
      </div>
      {children}
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
