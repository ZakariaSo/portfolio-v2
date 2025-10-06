import {
    RiFacebookBoxFill,
    RiGithubFill,
    RiLinkedinFill,
  } from "@remixicon/react";
import { link } from "framer-motion/client";
  
  export const navItems = [
    {
      id: 1,
      label: "Home",
      href: "#home",
    },
    {
      id: 2,
      label: "About me",
      href: "#about",
    },
    {
      id: 3,
      label: "Resume",
      href: "#resume",
    },
    {
      id: 4,
      label: "Projects",
      href: "#projects",
    },
    {
      id: 5,
      label: "Contact",
      href: "#contact",
    },
  ];
  
  export const heroIcons = [
    {
      id: 1,
      icon: RiLinkedinFill,
      link:"https://www.linkedin.com/in/zakaria-sobahi-36038b340/",

      
    },
    {
      id: 2,
      icon: RiFacebookBoxFill,
    },
    {
      id: 3,
      icon: RiGithubFill,
      link: "https://github.com/ZakariaSo"
    },
  ];
  
  export const aboutItems = [
    {
      id: 1,
      label: "React & Next.js development",
    },
    {
      id: 2,
      label: "TypeScript & JavaScript (ES6+)",
    },
    {
      id: 3,
      label: "Responsive design & CSS frameworks",
    },
    {
      id: 4,
      label: "API integration & state management",
    },
    {
      id: 5,
      label: "Performance optimization",
    },
    {
      id: 6,
      label: "React Native development",
    },
  ];
  
  export const ResumeItems = [
    {
      id: 1,
      title: "Experience",
      list: [
        {
          role: "Frontend Developer",
          label: "AGADEV",
          time: "2022-Present",
        },
        {
          label: "AGADEV",
          role: "Business Analyst",
          time: "2020-2022",
        },
        {
          label: "Freelancer",
          role: "Junior Developer",
          time: "2019-2020",
        },
      ],
    },
    {
      id: 2,
      title: "Education",
      list: [
        {
          label: "University Internationl AGADIR",
          role: "Master Degree",
          time: "2019",
        },
        {
          label: "Auto-Formation ",
          role: "React Developer ",
          time: "2022",
        },
      ],
    },
  ];
  
  export const ProjectsItems = [
    {
      id: 1,
      title: "Kitty Plan",
      src: "/images/KittyPlan.png",
      text: "The modern online fundraising platform that simplifies collecting money for all your events and projects.",
    },
    {
      id: 2,
      title: "Tarab Caftan",
      src: "/images/TarabCaftan.png",
      link:"https://tarabcaftan.com/",
      text: "Discover the elegance of Moroccan tradition with our exquisite collection of caftans and traditional women's clothing.",
    },
    {
      id: 3,
      title: "Travel World",
      src: "/images/Travel.jpeg",
      text: "Discover your next adventure - Travel planning made simple and stress-free.",
    },
    {
      id: 4,
      title: "Books",
      src: "/images/BookApp.jpeg",
      text: "Your online destination for books - Discover, explore, and order with ease.",
    },
  ];
  
  export const contactItems = [
    {
      id: 1,
      label: "Email:",
      link: "zakariaa.sobahi@gmail.com",
      href: "zakariaa.sobahi@gmail.com"
    },
    {
      id: 2,
      label: "Phone:",
      link: "+212 600 259 486 ",
    
    },
    {
      id: 3,
      label: "Location:",
      link: "AGADIR , MAR",
    },
  ];