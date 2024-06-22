import MentalStopImage from "@/public/Project_Photos/mentalstop.webp";

// MentalStop
import M_Image_1 from "@/public/MentalStop_Images/Image_1.png";
import M_Image_2 from "@/public/MentalStop_Images/Image_2.png";
import M_Image_3 from "@/public/MentalStop_Images/Image_3.png";
import M_Image_4 from "@/public/MentalStop_Images/Image_4.png";
import M_Image_5 from "@/public/MentalStop_Images/Image_5.png";
import M_Image_6 from "@/public/MentalStop_Images/Image_6.png";
import M_Image_7 from "@/public/MentalStop_Images/Image_7.png";

import Blog_Image_1 from "@/public/Blog_Images/Image_1.png";
import Blog_Image_2 from "@/public/Blog_Images/Image_2.png";
import Blog_Image_3 from "@/public/Blog_Images/Image_3.png";
import Blog_Image_4 from "@/public/Blog_Images/Image_4.png";
import Blog_Image_5 from "@/public/Blog_Images/Image_5.png";
import Blog_Image_6 from "@/public/Blog_Images/Image_6.png";
import Blog_Image_7 from "@/public/Blog_Images/Image_7.png";
import Blog_Image_8 from "@/public/Blog_Images/Image_8.png";

import Newsquest_1 from "@/public/Newsquest_Images/Image_1.png";
import Newsquest_2 from "@/public/Newsquest_Images/Image_2.png";
import Newsquest_3 from "@/public/Newsquest_Images/Image_3.png";
import Newsquest_4 from "@/public/Newsquest_Images/Image_4.png";
import Newsquest_5 from "@/public/Newsquest_Images/Image_5.png";
import Newsquest_6 from "@/public/Newsquest_Images/Image_6.png";
import Newsquest_7 from "@/public/Newsquest_Images/Image_7.png";

import FaceFilter_1 from "@/public/FaceFilter_Images/Image_1.png";
import FaceFilter_2 from "@/public/FaceFilter_Images/Image_2.png";
import FaceFilter_3 from "@/public/FaceFilter_Images/Image_3.png";
import FaceFilter_4 from "@/public/FaceFilter_Images/Image_4.png";
import FaceFilter_5 from "@/public/FaceFilter_Images/Image_5.png";
import FaceFilter_6 from "@/public/FaceFilter_Images/Image_6.png";
import FaceFilter_7 from "@/public/FaceFilter_Images/Image_7.png";
import FaceFilter_8 from "@/public/FaceFilter_Images/Image_8.png";

import DrivingGame_1 from "@/public/DrivingGame_Images/Image_1.png";
import DrivingGame_2 from "@/public/DrivingGame_Images/Image_2.png";
import DrivingGame_3 from "@/public/DrivingGame_Images/Image_3.png";

const projects = [
  {
    name: "Blog",
    year: "2023",
    description:
      "A fullstack blog forum, where anyone can CRUD their own blogs.",
    longDescription:
      "A fullstack CRUD blog forum, built with Next.js. Users can create an account, and create, read, update, and delete their own blog posts. When creating or updating their own blog posts, they can use a WYSIWYG editor to write their own blogs.",
    image: "",
    appImages: [
      Blog_Image_1,
      Blog_Image_2,
      Blog_Image_3,
      Blog_Image_4,
      Blog_Image_5,
      Blog_Image_6,
      Blog_Image_7,
      Blog_Image_8,
    ],
    link: "/projects/blog",
    url_shortened: "blog",
    project_link: "https://blog-three-rho-54.vercel.app/",
    github_link: "https://github.com/SeansC12/blog",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "MentalStop",
    year: "2022",
    description:
      "A one-stop mental health resource to help youths take charge of their mood.",
    longDescription: `During the COVID-19 pandemic, reduced social interactions highlighted the importance of mental wellness. MentalStop is an award-winning app that uses AI to help youths manage their moods and educate the public about mental health.
\nKey features include Diary, where users can record their feelings, which are then analyzed using AI sentiment analysis to understand their emotions. The app plots mood scores on a graph, using linear regression to detect trends. The Inquire feature offers a reflective questionnaire as a simple alternative.
\nThe Learn More page debunks myths and provides information on common mental illnesses, combating stereotypes and misconceptions.
\nMentalStop won the Distinction Award at the IMDA DigitalForLife Youth Awards in 2022, recognizing its positive impact on the community. 
\nCreators: Tan Xuan Han (leader), Sean Ulric Buguina Chua, Harish Ram Baghavath, Tay Kai Quan, Asher Ng Say Kiat`,
    image: MentalStopImage,
    awardLink:
      "https://www.channelnewsasia.com/brandstudio/imc-youthawards/schoolofsciencetech",
    appImages: [
      M_Image_1,
      M_Image_2,
      M_Image_3,
      M_Image_4,
      M_Image_5,
      M_Image_6,
      M_Image_7,
    ],
    link: "/projects/mentalstop",
    url_shortened: "mentalstop",
    project_link: "https://mentalstop-sstinc.web.app/",
    github_link: "https://github.com/SeansC12/mentalstop",
    stack: ["Next.js", "Firebase"],
  },
  {
    name: "Face Filter",
    year: "2024",
    description:
      'First ever "change the size of the filter by pinching" face filter.',
    longDescription:
      'Face Filter is a web app that allows users to apply filters to their faces in real-time. It uses OpenCV to detect faces and apply filters to them. The user can also change the size of the filter by pinching and dragging their fingers up and down, a feature that has never been implemented before. Check out the "Demonstration" section on the GitHub for a video demonstration. The app is built with Vite and Flask.',
    image: "",
    appImages: [
      FaceFilter_1,
      FaceFilter_2,
      FaceFilter_3,
      FaceFilter_4,
      FaceFilter_5,
      FaceFilter_6,
      FaceFilter_7,
      FaceFilter_8,
    ],
    link: "/projects/face-filter",
    url_shortened: "face-filter",
    project_link: "",
    github_link:
      "https://github.com/SeansC12/face-filter-flask",
    stack: ["Vite", "Flask", "OpenCV"],
  },
  {
    name: "Newsquest",
    year: "2023",
    description:
      "A gamified news site aggregated from sources worldwide.",
    longDescription:
      "Newsquest is a one-stop news site where the user can view news articles published on all major journalist websites. It uses a News API to fetch from all these different sources. It also gamifies the experience by keeping track of user points, which are incremented by reading a news article.",
    image: "",
    appImages: [
      Newsquest_1,
      Newsquest_2,
      Newsquest_3,
      Newsquest_4,
      Newsquest_5,
      Newsquest_6,
      Newsquest_7,
    ],
    link: "/projects/newsquest",
    url_shortened: "newsquest",
    project_link: "https://newsquest.vercel.app",
    github_link: "https://github.com/SeansC12/newsquest",
    stack: ["Next.js", "MySQL", "Supabase"],
  },
  {
    name: "Driving Game (WIP)",
    year: "2024",
    description:
      "A simple driving game made with React and Three.js. Just for fun.",
    longDescription: `A simple driving game made with React and Three.js. Just for fun. The user hit the gas to go forward or backwards, and steer the car left or right. The game is still a work in progress.
      \n Inspired and referenced from https://github.com/Domenicobrz/R3F-in-practice`,
    image: "",
    appImages: [
      DrivingGame_1,
      DrivingGame_2,
      DrivingGame_3,
    ],
    link: "/projects/driving-game",
    url_shortened: "driving-game",
    project_link: "https://driving-game-indol.vercel.app/",
    github_link: "https://github.com/SeansC12/driving-game",
    stack: ["CRA", "Three.js"],
  },
];

export default projects;
