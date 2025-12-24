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
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeIn}>About Me</motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 mb-9 ">
          I'm a Full-Stack & Mobile Developer with 5 years of experience
          building scalable, high-performance applications. 
          I design and develop
          complete solutions, from user interfaces to backend services and APIs.
          I specialize in web and mobile development, working across frontend
          and backend to deliver robust, production-ready applications. My
          expertise includes application architecture, state management, API
          design and integration, database interaction, and responsive,
          accessible UI/UX. 
          I focus on writing clean, maintainable code and
          building reliable systems that scale. I work with startups and
          established companies to turn ideas into fully functional web and
          mobile products.
        </motion.p>
        {/*skills*/}
        <motion.div variants={fadeIn} className="skills">
          <motion.p
            variants={fadeIn}
            className="text-white font-semibold text-x1 mb-3"
          >
            Skills:
          </motion.p>
          <motion.ul variants={fadeInUp} className="">
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
