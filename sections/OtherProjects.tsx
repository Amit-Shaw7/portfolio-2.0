import Heading from '@/components/Heading'
import OtherProject from '@/components/OtherProject';
import { otherProjects } from '@/constants/otherProjects';
import React from 'react'

const OtherProjects = () => {
    return (
        <section id='#other-projects' className='w-full py-20 font-nunito'>
            <Heading title='Some Other Projects' index={4} />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    otherProjects.map((project) => (
                        <OtherProject key={project.title} project={project}/>
                    ))
                }
            </div>
        </section>
    )
}

export default OtherProjects