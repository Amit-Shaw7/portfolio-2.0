import Heading from '@/components/Heading'
import FeaturedProject from '@/components/FeaturedProject'
import { featuredProjects } from '@/constants/featuredProjects'
import React from 'react'

const Projects = () => {  
    return (
        <section id="projects" className='py-20 w-full'>
            <Heading title="Thing's I've built" index={3} />
            <div className='flex justify-center flex-col gap-32'>
                {
                    featuredProjects.map((project, index) => (
                        <FeaturedProject key={index} project={project} index={index}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects