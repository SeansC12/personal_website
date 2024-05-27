import MentalStopImage from "@/public/project_photos/mentalstop.webp";

const projects = [
  {
    name: "Blog",
    year: "2023",
    description:
      "A fullstack CRUD blog forum, built with Next.js.",
    image: "",
    link: "/projects/blog",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "MentalStop",
    year: "2022",
    description: "Lorem ipsum",
    image: MentalStopImage,
    link: "/projects/mentalstop",
    stack: ["Next.js", "Firebase"],
  },
  {
    name: "Face Filter",
    year: "2024",
    description: "Lorem ipsum",
    image: "",
    link: "/projects/face-filter",
    stack: ["Vite", "Flask", "OpenCV"],
  },
  {
    name: "Newsquest",
    year: "2023",
    description: "Lorem ipsum",
    image: "",
    link: "/projects/newsquest",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "Driving Game",
    year: "2024",
    description: "Lorem ipsum",
    image: "",
    link: "/projects/driving-game",
    stack: ["CRA", "Three.js"],
  },
];

export default projects;
