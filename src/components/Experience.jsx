import React from 'react'
import {ResumeItems} from '../constant/data'
import { motion as Motion } from "framer-motion"; 

import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";


const Experience = () => {
  return (
    <section className="section" id ='resume'>
    <Motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    
    className='container'>
        <Motion.h2 variants={fadeIn}>My Resume</Motion.h2>
        {/* wrapper */}
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-20'>
            {ResumeItems.map((item)=>(
                <Motion.div  variants={ fadeInUp}key={item.id} className='divide-y divide-neutral-800'>
                    <h3 className='text-2xl font-semibol mt-8 pb-3'>{item.title}</h3>

                    <div className='mt-10 space-y-8'>
                        {item.list.map((listItem, index)=>(
                            <div key={index} className='flex items-center justify-between flex-wrap gap-6'>
                        
                            <div>
                                <h4 className='text-xl'>{listItem.role}</h4>
                                <p>{listItem.label}</p>
                            </div>
                            <p className='border border-neutral-700 p-2.5 text-white'>
                                {listItem.time}</p>
                            </div>

                        ))}
                    </div>
                </Motion.div>
            ))}
        </div>
    </Motion.div>
 
    </section>
  )
}

export default Experience