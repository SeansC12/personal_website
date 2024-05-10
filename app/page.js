import Image from "next/image";
import background_image from "@/public/background_image.jpeg";
import linkedin from "@/public/linkedin.png";
import github from "@/public/github.svg";
import {
  SocialMediaPill,
  SocialMediaPillWrapper,
} from "@/components/SocialMediaPill";

export default function Home() {
  return (
    <div className="w-full h-max relative">
      <Image
        src={background_image}
        className="absolute top-0 left-0 z-0 brightness-[0.2]"
      />
      <div className="absolute top-0 left-0">
        <div className="px-64 py-14">
          <h1 className="mb-3">Sean Ulric Buguina Chua</h1>
          <SocialMediaPillWrapper>
            <SocialMediaPill
              icon={linkedin}
              link="https://www.linkedin.com/in/sean-chua-142a17265/"
            />
            <SocialMediaPill
              icon={github}
              link="https://github.com/SeansC12"
            />
            <SocialMediaPill
              icon={linkedin}
              link="https://www.linkedin.com/in/sean-chua-142a17265/"
            />
          </SocialMediaPillWrapper>
        </div>
      </div>
    </div>
  );
}
