import MentalStopImage from "@/public/Project_Photos/mentalstop.webp";

// MentalStop
import Image_1 from "@/public/MentalStop_Images/Image_1.png";
import Image_2 from "@/public/MentalStop_Images/Image_2.png";
import Image_3 from "@/public/MentalStop_Images/Image_3.png";
import Image_4 from "@/public/MentalStop_Images/Image_4.png";
import Image_5 from "@/public/MentalStop_Images/Image_5.png";
import Image_6 from "@/public/MentalStop_Images/Image_6.png";
import Image_7 from "@/public/MentalStop_Images/Image_7.png";

const projects = [
  {
    name: "Blog",
    year: "2023",
    description:
      "A fullstack CRUD blog forum, built with Next.js.",
    longDescription:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    image: "",
    appImages: [],
    link: "/projects/blog",
    url_shortened: "blog",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "MentalStop",
    year: "2022",
    description: "Lorem ipsum",
    longDescription: `During the COVID-19 pandemic, reduced social interactions highlighted the importance of mental wellness. MentalStop is an award-winning app that uses AI to help youths manage their moods and educate the public about mental health.
\nKey features include Diary, where users can record their feelings, which are then analyzed using AI sentiment analysis to understand their emotions. The app plots mood scores on a graph, using linear regression to detect trends. The Inquire feature offers a reflective questionnaire as a simple alternative.
\nThe Learn More page debunks myths and provides information on common mental illnesses, combating stereotypes and misconceptions.
\nMentalStop won the Distinction Award at the IMDA DigitalForLife Youth Awards in 2022, recognizing its positive impact on the community. 
\nCreators: Tan Xuan Han (leader), Sean Ulric Buguina Chua, Harish Ram Baghavath, Tay Kai Quan, Asher Ng Say Kiat`,
    image: MentalStopImage,
    appImages: [
      Image_1,
      Image_2,
      Image_3,
      Image_4,
      Image_5,
      Image_6,
      Image_7,
    ],
    link: "/projects/mentalstop",
    url_shortened: "mentalstop",
    stack: ["Next.js", "Firebase"],
  },
  {
    name: "Face Filter",
    year: "2024",
    description: "Lorem ipsum",
    longDescription:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    image: "",
    appImages: [],
    link: "/projects/face-filter",
    url_shortened: "face-filter",
    stack: ["Vite", "Flask", "OpenCV"],
  },
  {
    name: "Newsquest",
    year: "2023",
    description: "Lorem ipsum",
    longDescription:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    image: "",
    appImages: [],
    link: "/projects/newsquest",
    url_shortened: "newsquest",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "Driving Game",
    year: "2024",
    description: "Lorem ipsum",
    longDescription:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    image: "",
    appImages: [],
    link: "/projects/driving-game",
    url_shortened: "driving-game",
    stack: ["CRA", "Three.js"],
  },
];

export default projects;
