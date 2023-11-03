'use client';
import Heading from '@/components/Heading'
import FeaturedProject from '@/components/FeaturedProject'
import React from 'react'
import { featuredProjects } from '@/constants/featuredProjects'
import { motion } from 'framer-motion'
import { base, finalOpacity, finalY, initialOpacity, initialYMaxFromTop } from '@/constants/framerMotionConfig';

const Projects = () => {
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
            id="projects"
            className='py-20 w-full'
        >
            <Heading title="Thing's I've built" index={3} />
            <div className='flex justify-center flex-col gap-32'>
                {
                    featuredProjects.map((project, index) => (
                        <FeaturedProject
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Projects