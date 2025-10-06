import React from 'react'
import { contactItems } from '../constant/data'
import { RiGithubFill, RiLinkedinBoxFill,   } from '@remixicon/react'

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const Contact = () => {
  return (
  <section className="py-20" id='contact'>
    <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
    className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-natural-800 ">
        <motion.div variants={fadeIn}> 
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6 text-center"> Get In Touch</motion.h2>
        <motion.p variants={fadeIn} className='mb-7 mt-4'>
        Ready to work on your next project. Let's discuss how I can help bring your ideas to life.</motion.p>

        <motion.ul variants={fadeInUp}>
            {contactItems.map((item)=>(
                <li key={item.id} className='flex items-center gap-2 mb-4'>
                <p className='text-white font-semibold'>{item.label}</p>
                <a href='#'>{item.link}</a>
                </li>
            ))}
        </motion.ul>
        <div>   
            <button className='hover:text-neutral-300 transition-colors'>
                <RiLinkedinBoxFill size={30}/>
            </button>
            <button className='hover:text-neutral-300 transition-colors'>
                <RiGithubFill size={30}/>
            </button>
        </div>
        </motion.div>
        <motion.div variants={fadeInUp}>
        <form action="" className='grid gap-6'>
            <div className='grid gap-2'>
            <label htmlFor="name">Name *</label>
            <input type="text" placeholder='Your Name ' className='input'required />
            </div>
            <div className='grid gap-2'>
            <label htmlFor="email">Email *</label>
            <input type="email" placeholder='Your Email ' className='input'required />
            </div>
            <div className='grid gap-2'>
            <label htmlFor="message">Message *</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' className='h-40 border border-neutral-800 indent-4 py-2 resize-non' required></textarea>
            </div>
            <button type='submit' className='primary-btn max-w-max'>Send Message</button>
        </form>
        </motion.div>
       

    </motion.div>
  </section>
  )
}

export default Contact