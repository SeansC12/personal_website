// PillVision
import PillCounterUI from "@/public/PillVision/UI/index.js";
import PillVision_1 from "@/public/PillVision/Carousel_Images/Images_1.webp";

// Linkify
import Linkify_1 from "@/public/Linkify/Image_1.webp";
import Linkify_2 from "@/public/Linkify/Image_2.webp";

// MentalStop
import MentalStopImage from "@/public/Project_Photos/mentalstop.webp";

import MentalStopUI from "@/public/MentalStop/UI/index.js";

import M_Image_1 from "@/public/MentalStop/Images/Image_1.webp";
import M_Image_2 from "@/public/MentalStop/Images/Image_2.webp";
import M_Image_3 from "@/public/MentalStop/Images/Image_3.webp";
import M_Image_4 from "@/public/MentalStop/Images/Image_4.webp";
import M_Image_5 from "@/public/MentalStop/Images/Image_5.webp";
import M_Image_6 from "@/public/MentalStop/Images/Image_6.webp";
import M_Image_7 from "@/public/MentalStop/Images/Image_7.webp";

// Blog
import Blog_Image_1 from "@/public/Blog_Images/Image_1.webp";
import Blog_Image_2 from "@/public/Blog_Images/Image_2.webp";
import Blog_Image_3 from "@/public/Blog_Images/Image_3.webp";
import Blog_Image_4 from "@/public/Blog_Images/Image_4.webp";
import Blog_Image_5 from "@/public/Blog_Images/Image_5.webp";
import Blog_Image_6 from "@/public/Blog_Images/Image_6.webp";
import Blog_Image_7 from "@/public/Blog_Images/Image_7.webp";
import Blog_Image_8 from "@/public/Blog_Images/Image_8.webp";

// Newsquest
import Newsquest_1 from "@/public/Newsquest_Images/Image_1.webp";
import Newsquest_2 from "@/public/Newsquest_Images/Image_2.webp";
import Newsquest_3 from "@/public/Newsquest_Images/Image_3.webp";
import Newsquest_4 from "@/public/Newsquest_Images/Image_4.webp";
import Newsquest_5 from "@/public/Newsquest_Images/Image_5.webp";
import Newsquest_6 from "@/public/Newsquest_Images/Image_6.webp";
import Newsquest_7 from "@/public/Newsquest_Images/Image_7.webp";

// Face Filter
import FaceFilter_1 from "@/public/FaceFilter_Images/Image_1.webp";
import FaceFilter_2 from "@/public/FaceFilter_Images/Image_2.webp";
import FaceFilter_3 from "@/public/FaceFilter_Images/Image_3.webp";
import FaceFilter_4 from "@/public/FaceFilter_Images/Image_4.webp";
import FaceFilter_5 from "@/public/FaceFilter_Images/Image_5.webp";
import FaceFilter_6 from "@/public/FaceFilter_Images/Image_6.webp";
import FaceFilter_7 from "@/public/FaceFilter_Images/Image_7.webp";
import FaceFilter_8 from "@/public/FaceFilter_Images/Image_8.webp";

// Driving Game
import DrivingGame_1 from "@/public/DrivingGame_Images/Image_1.webp";
import DrivingGame_2 from "@/public/DrivingGame_Images/Image_2.webp";
import DrivingGame_3 from "@/public/DrivingGame_Images/Image_3.webp";

const projects = [
  {
    name: "PillVision 💊",
    year: "2024",
    description:
      "A powerful and accurate pill counter using computer vision.",
    longDescription1: `PillVision consists of 2 servers, a Flask server and a React server. 
\nThe React server, running on the client, sends a <i>POST</i> request to the Flask server, with the image of the pills from the camera feed attached as the payload every 1.5 seconds. 
\nThe Flask server will then use the custom-trained YOLOv8 model to perform inferencing on the image. The YOLOv8 model will return the total number of pills and its corresponding coordinates. The Flask server then performs our damaged pill detection algorithm, subsequently returning the total number of damaged pills and its corresponding coordinates. The Flask server then sends the total number of pills and damaged pills back to the React server, which will then display the results on the screen.`,
    longDescription2: `Both the Flask server and React server are containerised with Docker. For deployment, the Flask server is deployed as a container and the React server is deployed with Vercel. During development, both applications were containerised as we were developing on different operating systems; our laptop (M1 MacBook) and the NVIDIA Jetson. Both images are pushed to Dockerhub.`,
    longDescription3: `The machine had to run offline, so we used the powerful NVIDIA Jetson Nano 4GB to run both servers. I learnt a lot about Linux and CUDA during this project. Many problems surfaced while running the application on the Jetson (due to faulty hardware). There was one point where the Jetson could not boot up, and missing dependencies everywhere, Docker container not being able to access the CUDA cores etc. Trying to debug the OS issues and CUDA issues led me to learn a lot about Linux; system privileges, package installations, bash, and more. In the end, I am proud to say that it worked.`,
    longDescription4: `The team trained a custom YOLOv8 model to detect pills. The model was trained on a dataset of 1368 images, and achieved a precision of 94.3%. It was trained on Google Colab's GPUs, and it took a little over 12 hours to train.`,
    longDescription5:
      "Built in collaboration with KKH Women and Children’s Hospital in Singapore and School of Science and Technology, Singapore, PillVision (software) and its accompanying hardware (not covered here) is a computer vision aided pill counting machine. The entire team consists of Dimitros Lim, Sean Chua, Jarell Song, Tan Yi Shen. <u>The software, PillVision, was written by Sean Chua and Dimitros Lim.</u>",
    overrideUI: true,
    overrideUI: PillCounterUI,
    image: "",
    appImages: [
      {
        video: true,
        src: "https://drive.google.com/file/d/1NGKuJGKeoDW1JKi9aEtKJTlPAM1E46mg/preview",
        aspectRatio: "4/3",
      },
      {
        video: true,
        src: "https://drive.google.com/file/d/15zLAYvRh8ZT__qexuFAfsO2O6xi6pCie/preview",
        aspectRatio: "4/3",
      },
      PillVision_1,
    ],
    link: "/projects/pill-vision",
    url_shortened: "pill-vision",
    project_link: "",
    github_link:
      "https://github.com/SeansC12/pill-counting/tree/main",
    stack: ["React", "Flask", "Docker", "YOLOv8"],
  },
  {
    name: "Linkify",
    year: "2024",
    description:
      "A URL shortener with basic analytics, built with htmx.",
    longDescription: `A URL shortener with basic analytics, built with htmx. Users can shorten their URLs, and view the number of clicks on their shortened URLs. The app is built with htmx, Redis, and ExpressJS as the backend, deployed on Fly.io.
\nRedis was chosen as the database as it is an in-memory database, and is very fast for read operations, decreasing latency when querying database before user redirection.
\nAll of \"My links\" are stored in cookies, and the \"My links\" section will continuously poll the Express server, attaching the cookies as with any HTTP request, where the server will then process the cookies, and return the HTML with the view count retrieved from the Redis database.`,
    overrideUI: false,
    image: "",
    appImages: [
      {
        video: true,
        src: "https://drive.google.com/file/d/1J10Rp9wWUZdUApcas36ouRlVAR5G8tI0/preview",
        aspectRatio: "4/3",
      },
      Linkify_1,
      Linkify_2,
    ],
    link: "/projects/linkify",
    url_shortened: "linkify",
    github_link: "https://github.com/SeansC12/linkify",
    stack: ["htmx", "Redis", "Expressjs"],
  },
  {
    name: "Blog",
    year: "2023",
    description:
      "A fullstack blog forum, where anyone can CRUD their own blogs.",
    longDescription: `A fullstack CRUD blog forum, built with Next.js. Users can create an account, and create, read, update, and delete their own blog posts. When creating or updating their own blog posts, users can use a WYSIWYG editor to write their own blogs.
\nUser authentication was handled by Supabase, and the database was MySQL. The app was deployed on AWS Amplify, while the database was deployed on AWS RDS.`,
    overrideUI: false,
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
    overrideUI: true,
    overrideUI: MentalStopUI,
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
    overrideUI: false,
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
    stack: ["React", "Flask", "OpenCV"],
  },
  {
    name: "Newsquest",
    year: "2023",
    description:
      "A gamified news site aggregated from sources worldwide.",
    longDescription:
      "Newsquest is a one-stop news site where the user can view news articles published on all major journalist websites. It uses a News API to fetch from all these different sources. It also gamifies the experience by keeping track of user points, which are incremented by reading a news article.",
    overrideUI: false,
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
    overrideUI: false,
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
    stack: ["React", "Three.js"],
  },
];

export default projects;
