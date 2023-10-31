import Heading from '@/components/Heading'
import Project from '@/components/Project'
import { featuredProjects } from '@/constants/featuredProjects'
import { projectArr } from '@/constants/projects'
import Image from 'next/image'
import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {  
    return (
        <section id="#projects" className='py-20 w-full'>
            <Heading title="Thing's I've built" index={3} />
            <div className='flex justify-center flex-col gap-20'>
                {
                    featuredProjects.map((project, index) => (
                        <Project key={index} project={project} index={index}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects