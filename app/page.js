import Image from "next/image";
import background_image from "@/public/background_image.jpeg";
import linkedin from "@/public/linkedin.png";
import github from "@/public/github.svg";
import email from "@/public/email.png";
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
              icon={email}
              link="mailto:sean.ulric.chua@gmail.com"
            />
          </SocialMediaPillWrapper>
          <div className="font-medium">
            I’m a web developer with a strong interest in
            React and building scalable and robust backend
            systems. I am reaching 2 years of experience in
            web development with React.
            <br></br>
            <br></br>I am fascinated by the complex
            infrastructures of big software companies and
            how they can be so resilient. I learn by
            building apps that strive to perform tasks in
            the simplest and most resilient way possible.
            Check some of them out below.
          </div>
        </div>
      </div>
    </div>
  );
}
