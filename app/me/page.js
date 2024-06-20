import React from "react";
import Image from "next/image";
import bmw from "@/public/Drawing_of_BMW/F80.png";
import me from "@/public/Selfie/SF.jpeg";
import Link from "next/link";

function page() {
  return (
    <div className="text-lg">
      <h1 className="mb-4">About Me</h1>
      <div className="w-full flex items-center justify-center"></div>
      <div className="flex items-center justify-between gap-10 flex-row-reverse">
        <div className="flex items-center justify-center flex-col text-xs">
          <Image
            src={me}
            className="aspect-square rounded-md overflow-hidden w-40 min-w-40 mb-4"
          />
          Me in SF for a school trip.
        </div>
        <div className="text-lg">
          Hey, I'm Sean Chua. I have been developing and
          deploying full-stack web applications for 2 years
          now. I am passionate in web development and in
          building robust software infrastructures. <br />
          And I freaking love cars 🚗.
        </div>
      </div>
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center justify-center flex-col">
          <Image src={bmw} className="w-52" />
          <div className="text-xs">
            My dream (F80 M3).{" "}
            <Link
              className="text-link-purple hover:bg-link-purple hover:text-black"
              href="https://www.pinterest.com/pin/108016091056703313/"
            >
              Source.
            </Link>
          </div>
        </div>
        <div>
          I am fascinated by the complex infrastructures of
          big software
          <br /> companies and how they handle millions of
          web traffic while <br /> staying resilient. I
          learn by building full-stack apps that
          <br /> strive to be as simple and resilient as
          possible.
        </div>
        {/* I want to make an arrow that points to the below <Image>, something like a curved arrow coming from any direction with the text at the top saying "My favourite generation of my favourite car" */}
      </div>
    </div>
  );
}

export default page;
