import React from "react";
import { Badge } from "@/components/ui/badge";

const techStackColours = {
  "next.js": ["#fff", "#000"],
  mysql: ["#01758f", "#fff", "#f29111"],
  firebase: ["#ffc303", "#000"],
  supabase: ["#3dcf8e", "#000"],
  react: ["#61dafa", "#000"],
  flask: ["#42adbf", "#000"],
  opencv: ["#ff7074", "#000"],
  cra: ["#03d3ac", "#000"],
  "three.js": ["#000", "#fff"],
  yolov8: ["#000", "#fff"],
  docker: ["#0a93e6", "fff"],
};

function TechStackPill({ text }) {
  return (
    <Badge
      style={{
        backgroundColor:
          techStackColours[text.toLowerCase()][0],
        color: techStackColours[text.toLowerCase()][1],
      }}
    >
      {text}
    </Badge>
  );
}

export default TechStackPill;
