'use client';
import React from 'react'
import Heading from '@/components/Heading'
import OtherProject from '@/components/OtherProject';
import { otherProjects } from '@/constants/otherProjects';
import { motion } from 'framer-motion'
import { base, finalOpacity, finalY, initialOpacity, initialYMaxFromTop } from '@/constants/framerMotionConfig';

const OtherProjects = () => {
    return (
        <motion.section
            initial={{
                opacity: initialOpacity,
                y: initialYMaxFromTop,
            }}
            whileInView={{
                opacity: finalOpacity,
                y: finalY,
            }}
            transition={{
                duration: base,
                delay: 0.1
            }}
            viewport={{ once: true }}
            id='#other-projects'
            className='w-full py-20 font-nunito'
        >
            <Heading title='Some Other Projects' index={4} />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    otherProjects.map((project , idx) => (
                        <OtherProject
                            key={project.title}
                            project={project}
                            index={idx}
                        />
                    ))
                }
            </div>
        </motion.section>
    )
}

export default OtherProjects