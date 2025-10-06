import React from 'react'
import { Carousel } from './ui/carousel'
import { ProjectsItems } from '../constant/data'

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const Project = () => {
  return (
    <section  className=" section"id="projects">
        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{once: true}}
        className='container'>
        <motion.h2 variants={fadeIn} className='text-center'>Recent Projects</motion.h2>
       
          <motion.div variants={fadeInUp}className='relative overflow-hidden w-full h-full py-20'>
            <Carousel slides={ProjectsItems}/>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Project