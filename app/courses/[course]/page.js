"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import courseCompletions from "@/lib/CourseCompletions.js";

// Pill
import TechStackPill from "@/components/TechStackPill";

// Icons
import github from "@/public/social_media_icons/github.svg";
import web from "@/public/social_media_icons/web.svg";

// App Image Carousel
import { AppImageCarousel } from "@/components/AppImageCarousel";

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
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-lg text-desc-gray mt-5"
      >
        {course.description}
      </div>
    </div>
  );
}

export default page;
