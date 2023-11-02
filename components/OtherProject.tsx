import Image from 'next/image'
import React from 'react'
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi'
import TechnologiesUsed from './TechnologiesUsed'
import Icon from './Icon'

type Props = {
    project: {
        title: string,
        desc: string,
        img: string,
        skillUsed: string[],
        siteURL: string,
        githubURL: string,
    }
}

const OtherProject = (props: Props) => {
    return (
        <div className='p-5 flex flex-col justify-between bg-card shadow-lg rounded-md gap-10 transition duration-300 hover:-translate-y-1'>
            <div className='flex items-center justify-between'>
                <FiFolder className="text-highlight text-5xl font-extralight" />
                <div className='flex items-center gap-5'>
                    <Icon
                        href={props.project.githubURL}
                        icon={FiGithub}
                        target='_blank'
                    />
                    <Icon
                        href={props.project.siteURL}
                        icon={FiExternalLink}
                        target='_blank'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <h4 className='text-2xl font-semibold text-white hover:text-highlight transition duration-300'>{props.project.title}</h4>
                <p className='text-unselected text-md'>{props.project.desc}</p>
            </div>

            <TechnologiesUsed technologies={props.project.skillUsed} />
        </div>
    )
}

export default OtherProject