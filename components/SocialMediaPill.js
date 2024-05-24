import React from "react";
import Link from "next/link";
import Image from "next/image";

function SocialMediaPillWrapper({ children }) {
  return (
    <div className="flex items-center justify-start gap-4 mb-3">
      {children}
    </div>
  );
}

function SocialMediaPill({ icon, link }) {
  return (
    <Link
      href={link}
      className="bg-gray-700 p-[0.325rem] rounded-md hover:opacity-90"
    >
      <Image src={icon} width={25} height={25} />
    </Link>
  );
}

export { SocialMediaPillWrapper, SocialMediaPill };
