import React from "react";
import { aboutItems } from "../constant/data";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const About = () => {
  return (
    <section id="about" className="section bg-secondary-clr">
      <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
      className="container">
        <motion.h2   variants={fadeIn}>About Me</motion.h2>
        <motion.p   variants={fadeInUp} className="mt-3 mb-9 ">
          I'm a frontend developer with 5 years of experience building scalable
          web applications. I specialize in React, TypeScript, and modern CSS
          frameworks to deliver high-performance solutions. My expertise
          includes component architecture, state management, API integration,
          and responsive design. I focus on writing maintainable code and
          creating accessible user experiences. Currently working with startups
          and established companies to transform ideas into production-ready
          applications.
        </motion.p>
        {/*skills*/}
        <motion.div   variants={fadeIn} className="skills">
          <motion.p    variants={fadeIn} className="text-white font-semibold text-x1 mb-3">
            Skills:</motion.p>
          <motion.ul   variants={fadeInUp} className="">
            {aboutItems.map((item) => (
              <li key={item.id}>
                <p> ✓{item.label}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
