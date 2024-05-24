import Image from "next/image";
import background_image from "@/public/background_image.jpeg";

// Social Media Icons
import linkedin from "@/public/social_media_icons/linkedin.png";
import github from "@/public/social_media_icons/github.svg";
import email from "@/public/social_media_icons/email.png";
import {
  SocialMediaPill,
  SocialMediaPillWrapper,
} from "@/components/SocialMediaPill";

// Project Icons
import MentalStopImage from "@/public/project_photos/mentalstop.webp";

// Shadcn

const projects = [
  { name: "Blog", image: "", link: "/projects/blog" },
  {
    name: "MentalStop",
    image: MentalStopImage,
    link: "/projects/mentalstop",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "Face Filter",
    image: "",
    link: "/projects/face-filter",
    stack: ["Vite", "Flask", "OpenCV"],
  },
  {
    name: "Newsquest",
    image: "",
    link: "/projects/newsquest",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "Driving Game",
    image: "",
    link: "/projects/driving-game",
    stack: ["CRA", "Three.js"],
  },
];

export default function Home() {
  return (
    <div className="w-full h-max relative">
      <Image
        src={background_image}
        alt={"Background image of the site"}
        className="absolute top-0 left-0 z-0 brightness-[0.2]"
      />
      <div className="absolute top-0 left-0">
        <div className="px-64 py-14">
          {/* <Image /> */}
          <h1 className="mb-3">
            Sean Chua. <u>Web Developer.</u>
          </h1>
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

          <div className="flex flex-wrap gap-12 flex-1">
            {projects.map((project, index) => (
              <div
                className="flex-1 flex items-center justify-center flex-col gap-4 transition-all"
                key={index}
              >
                <div className="flex items-center justify-center flex-col min-w-44 cursor-pointer gap-4 group rounded-xl p-4">
                  {project.image ? (
                    <Image
                      className="w-full aspect-square max-w-40 hover:opacity-80"
                      src={project.image}
                    />
                  ) : (
                    <div className="rounded-full hover:opacity-80 w-full max-w-40 aspect-square bg-pink-500" />
                  )}
                  <div className="font-bold group transition duration-300">
                    {project.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        {/* Div to put all the stuff in */}
      </div>
    </div>
  );
}
