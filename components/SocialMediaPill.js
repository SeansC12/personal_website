import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>;
}

function SocialMediaPillWrapper({ children }) {
  return (
    <div className="flex items-center justify-start gap-2 mb-5">
      {children}
    </div>
  );
}

function SocialMediaPill({ icon, link }) {
  return (
    <Link href={link}>
      <Button
        variant="outline"
        className="p-2 dark:bg-site-gray"
      >
        <Image src={icon} width={25} height={25} />
      </Button>
    </Link>
  );
}

export { SocialMediaPillWrapper, SocialMediaPill };
