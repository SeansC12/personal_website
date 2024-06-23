import React from "react";
import { Button } from "./ui/button";

function GlowingButton({ children }) {
  return (
    <div className="flex items-center">
      <div className="relative inline-flex group">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Button
          variant="outline"
          className="relative hover:dark:bg-site-gray dark:bg-site-gray flex gap-1"
        >
          {children}
        </Button>
      </div>
    </div>
  );
}

export default GlowingButton;
