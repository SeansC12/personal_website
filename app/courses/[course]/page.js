"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import courseCompletions from "@/lib/CourseCompletions.js";

// Shadcn
import { Card, CardHeader } from "@/components/ui/card";

// Get project information function
function getProjectObject(courses, name) {
  for (const element of courses) {
    if (element.url_shortened.toLowerCase() === name) {
      return element;
    }
  }
}

function page({ params }) {
  const course = getProjectObject(
    courseCompletions,
    params.course
  );
  return (
    <div className="w-full lg:w-[800px]">
      <div className="flex justify-between mb-5">
        <div className="flex items-center justify-center gap-3">
          <h2>{course.name}</h2>
        </div>
      </div>
      <Image
        src={course.imageOfCert}
        className="rounded-xl"
      />
      <Card className="dark:bg-site-gray dark:border-white/10 w-full text-center mt-5">
        <CardHeader>
          <div className="flex items-center justify-center">
            <div className="w-max link">
              <Link href={course.cert_link}>
                {course.cert_link}
              </Link>
              {/* <div className="h-[2px] bg-link-purple -mt-1" /> */}
            </div>
          </div>
        </CardHeader>
      </Card>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-[#DDDDDD] mt-5"
      >
        {course.description}
      </div>
    </div>
  );
}

export default page;
