import React from "react";
import { heroIcons } from "../constant/data";
import { BackgroundGradient } from "./ui/BackgroundGradient";   
import Button from "./Button";



import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";



const Hero = () => {
  return (
    <section className="py-28 lg:pt-40" id="home">
      <motion.div  
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="container mt-20 flex flex-col items-center"
      >
        {/* my photo */}    
        <motion.div 
          variants={fadeIn}
          // className="relative w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900"
        >
          <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
            <figure className="rounded-full overflow-hidden "> 
              <img
                src="./images/maphoto.jpg"
                alt="my photo"
                width={400}
                height={400}
              />
            </figure>
          </BackgroundGradient>
        </motion.div>
     
        {/* my hero content */}
        <div className="text-center mt-8">
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl lg:text-5xl mb-1.5 font-bold"
          >
            Hi, I'm Zakaria Sobahi.
          </motion.h1>
          <motion.h2 variants={fadeInUp}>Frontend Developer</motion.h2>
          <motion.p 
            variants={fadeInUp} 
            className="max-w-[820px] mx-auto mt-4 mb-6"
          >
            I'm Zakaria Sobahi, a frontend developer who architects seamless
            digital experiences through innovative code and intuitive design.
            With expertise in cutting-edge technologies and a passion for
            performance optimization, I transform complex business requirements
            into scalable, user-centric applications that drive meaningful
            engagement.
          </motion.p>
        </div>

        <motion.div 
          variants={fadeIn} 
          className="flex items-center gap-6 mb-8"
        >
          {heroIcons.map((icon) => {
            const IconComponent = icon.icon;
            return (
              <a 
                href={icon.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors" 
                key={icon.id}
              >
                <IconComponent size={30} className="icon" />
              </a>
            );
          })}
        </motion.div>

        {/* button */}
        <motion.div 
          variants={fadeInUp}
          className="mt-10 flex-wrap gap-6 items-center justify-center flex"
        > 
          <Button label="Download CV" classes="primary-btn" icon/>   
          <Button label="Let's Collaborate" classes="secondary-btn"/>     
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;