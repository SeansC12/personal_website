import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Link href={course.link}>
      <Card className="dark:bg-card-gray dark:border-green-600 dark:borer-white/10 cursor-pointer min-w-64 w-full h-full group grid grid-cols-[15%_85%] px-5">
        <div className="flex items-center justify-center">
          <Image
            src={course.instituteImage}
            className="w-12"
          />
        </div>
        <div>
          <CardHeader className="h-full">
            <div className="flex items-start justify-center flex-col h-full">
              <div className="text-sm font-mono text-desc-gray">
                {course.date}
              </div>
              <div className="font-[500] group-hover:underline">
                {course.name}
              </div>
            </div>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
}
