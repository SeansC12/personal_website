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
          building robust software infrastructures. And I
          freaking love cars 🚗.
        </div>
      </div>
      <div className="flex items-center justify-between gap-1 mt-4">
        <div className="flex items-center justify-center flex-col">
          <Image src={bmw} className="w-52" />
          <div className="text-xs">
            My favourite (F80 M3).{" "}
            <Link
              className="link"
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
      <div className="text-lg mt-10 mb-5">
        Feel free to contact me at{" "}
        <Link
          className="link underline"
          href="mailto:sean.ulric.chua@gmail.com"
        >
          sean.ulric.chua@gmail.com
        </Link>{" "}
        if you have any questions or if you want to work
        together.
      </div>
      <ul className="list-disc marker:text-[#666666] ml-5">
        <li className="mb-2">
          <Link
            className="link"
            href="https://www.linkedin.com/in/sean-chua-142a17265/"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="link"
            href="https://github.com/SeansC12"
          >
            GitHub
          </Link>
        </li>
      </ul>
      <h2 className="mt-10 mb-5">Technologies I use</h2>
      <ul className="list-disc marker:text-[#666666] ml-5">
        <li className="mb-2">
          <Link
            className="link"
            href="https://www.reactjs.org"
          >
            React (frameworks: Next.js and Vite)
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="link"
            href="https://www.supabase.io"
          >
            Supabase (authentication and PostgreSQL
            database)
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="link"
            href="https://www.mysql.com"
          >
            MySQL
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="link"
            href="https://www.sqlite.org"
          >
            Sqlite
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="link"
            href="https://aws.amazon.com"
          >
            AWS (Amplify and RDS)
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="link"
            href="https://www.turso.tech"
          >
            Turso (for sqlite deployment when I want to save
            money on MySQL)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
