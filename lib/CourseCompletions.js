import harvard from "@/public/Course_Completions/Harvard/Harvard_CS50x.webp";
import harvard_institute from "@/public/Course_Completions/Harvard/Harvard_Institute_Image.svg";

import aws from "@/public/Course_Completions/AWS/AWS.webp";
import aws_institute from "@/public/Course_Completions/AWS/AWS_Institute_Image.svg";

const courseCompletions = [
  {
    name: "Harvard CS50x: Introduction to Computer Science",
    description:
      "The course taught me many of the fundamentals of programming and low-level operations of a programming language. There was a big module on C where I learnt low-level concepts like memory management, data structures like hash tables, what arrays and lists are, etc. This is important because I started programming with Python, which abstracts away all these fundamentals, but knowing these is important.",
    url_shortened: "harvard",
    date: "Nov 2022",
    link: "/courses/harvard",
    cert_link:
      "https://certificates.cs50.io/7a58c658-454a-45b1-b0cc-ec42d0712be3.pdf?size=letter",
    instituteImage: harvard_institute,
    imageOfCert: harvard,
  },
  {
    name: "AWS Data Science Accelerator Program",
    description:
      "In this year-long program, the instructors taught machine learning and deployed models on AWS services. More in-depth concepts taught include Linear Regression, Logistic Regression, and Convolutional Neural Networks. As the year ended, my group and I worked on a capstone project, an ML model to match nurses and employers (hospitals) together, to aid hospitals in the manpower crunch.",
    url_shortened: "aws",
    date: "Nov 2022 - Aug 2023",
    link: "/courses/aws",
    cert_link:
      "https://drive.google.com/file/d/1uUKGgbHYmavnv0a1zPwqA96G0_ljAr9q/view?usp=sharing",
    instituteImage: aws_institute,
    imageOfCert: aws,
  },
];

export default courseCompletions;
