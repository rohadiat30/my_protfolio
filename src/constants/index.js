import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    ksi,
    strategisshop,
    vikrama,
    threejs,
    portfolio,
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
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Design",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "FrontEnd Developer",
      company_name: "PT. Keberlanjutan Strategis Indonesia",
      icon: ksi,
      iconBg: "#383E56",
      date: "Novermber 2021 - Now",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ]; 
  
  const projects = [
    {
      name: "Strategisshop",
      description:
        "Web-based platform that allows users to search, buy a product CCTV and many more",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "framerMotion",
          color: "pink-text-gradient",
        },
      ],
      image: strategisshop,
      source_code_link: "https://github.com/rohadiat30/strategisshop",
    },
    {
      name: "Protfolio",
      description:
        "Digital portfolio used to showcase their work and talent uniquely and to a wider audience..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threeJS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/rohadiat30/my_portfolio",
    },
    {
      name: "Landingpage Vikarama",
      description:
        "Is a website design that contains the company profile",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "adobeIllustator",
          color: "green-text-gradient",
        },
        {
          name: "adobePhotoshop",
          color: "pink-text-gradient",
        },
      ],
      image: vikrama,
      source_code_link: "https://www.figma.com/proto/S1K69JjN3xIP1m6cUvROVH/Untitled?page-id=0%3A1&node-id=3-12&viewport=1042%2C1562%2C0.5&scaling=min-zoom",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };