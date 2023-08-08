/* eslint-disable no-unused-vars */
import {
  developer,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  iiitkota,
  tesla,
  shopify,
  carrent,
  carrent1,
  tripguide1,
  jobit,
  tripguide,
  threejs,
  carrent2,
  jobit1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "HTML/CSS Developer",
    company_name: "None",
    icon: developer,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - june 2022",
    points: [
      "Developing and maintaining my own web applications using HTML, CSS and other related technologies.",
      "Learning from other developers and collaborated with them to create quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "IIIT Kota",
    icon: iiitkota,
    iconBg: "#383E56",
    date: "june 2022 - Present",
    points: [
      "Developing and maintaining IIIT Kota website using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "IIIT Kota",
    icon: iiitkota,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Developing and maintaining IIIT Kota in frontend And backend technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sataym proved me wrong.",
    name: "Abhishek Sophiya",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://e7.pngegg.com/pngimages/449/734/png-clipart-businessperson-cartoon-man-hand-boy.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Satyam does.",
    name: "Dhruv Soni",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://e7.pngegg.com/pngimages/449/734/png-clipart-businessperson-cartoon-man-hand-boy.png",
  },
  {
    testimonial:
      "After Satyajeet optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aaryan Choudhary",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://e7.pngegg.com/pngimages/449/734/png-clipart-businessperson-cartoon-man-hand-boy.png",
  },
];

const projects = [
  {
    name: "Blog-a-Way",
    description:
      "Web-based platform that allows users to write blogs. A blog, short for weblog, is a frequently updated web page used for personal commentary or business content.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent1,
    source_code_link: "https://github.com/magnus0055/Blog-a-Way/",
  },
  {
    name: "3D Portfolio",
    description:
      "3D Web Developer Portfolio in React JS , Three Js and TailwindCSS.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide1,
    source_code_link: "https://github.com/magnus0055/ThreeJs-Project/",
  },
  {
    name: "Tensorflow Object detection",
    description:
      "An object detection model is trained to detect the presence and location of multiple classes of objects. For example, a model might be trained with images that contain various pieces of fruit, along with a label that specifies the class of fruit they represent.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit1,
    source_code_link: "https://github.com/magnus0055/TFOD/ ",
  },
];

export { services, technologies, experiences, testimonials, projects };
