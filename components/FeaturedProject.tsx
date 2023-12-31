import React from 'react'
import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import TechnologiesUsed from './TechnologiesUsed'
import Overlay from './Overlay'
import Icon from './Icon'
import { motion } from 'framer-motion'
import { base, finalOpacity, finalX, initialOpacity, initialXMax, initialXMaxRight, initialYMaxFromTop } from '@/constants/framerMotionConfig'

type Props = {
    index: number,
    project: {
        title: string,
        desc: string,
        img: string,
        skillUsed: string[],
        siteURL: string,
        githubURL: string,
    }
}

const Project = (props: Props) => {
    return (
        <>
            <div
                className={`
                    md:flex
                    hidden 
                    ${props.index % 2 === 0 ? "flex-row" : "flex-row-reverse"} 
                    h-[350px]
                `}
            >
                <motion.div
                    initial={{
                        opacity: initialOpacity,
                        x: initialXMax,
                    }}
                    whileInView={{
                        opacity: finalOpacity,
                        x: finalX,
                    }}
                    transition={{
                        duration: base,
                        delay: 0.1
                    }}
                    viewport={{ once: true }}
                    className='relative flex items-center justify-center h-[340px] w-[60%]'
                >
                    <Overlay
                        className='
                            opacity-40 
                            hover:opacity-0 
                            bg-primary 
                            rounded-sm
                        '
                    />
                    <Image
                        src={`/assets/projects/${props.project.img}`}
                        height={400}
                        width={450}
                        layout='responsive'
                        alt='Amit Kumar Shaw'
                        className='
                            rounded-sm
                            transition
                            duration-300
                            object-cover
                        '
                    />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: initialOpacity,
                        x: initialXMaxRight,
                    }}
                    whileInView={{
                        opacity: finalOpacity,
                        x: finalX,
                    }}
                    transition={{
                        duration: base,
                        delay: 0.1
                    }}
                    viewport={{ once: true }}
                    className={`
                        font-nunito 
                        w-[40%] 
                        rounded-md 
                        ${props.index % 2 === 0 ? "-ml-10" : "-mr-10"} 
                        relative 
                        z-20 
                        py-5
                    `}
                >
                    <div className='h-full w-full flex flex-col  justify-between'>
                        {/* Heading and Project name */}
                        <div className={`w-full ${props.index % 2 === 0 ? "text-right" : "text-left"}`}>
                            <h5 className='text-primary font-semibold font-roboto'>Featured Project</h5>
                            <h6 className='text-unselected text-3xl font-bold'>{props.project.title}</h6>
                        </div>

                        {/* Project description card */}
                        <div
                            className='text-sm w-full bg-card hover:shadow-md transition duration-300 z-30 p-3 rounded-md'
                        >
                            <p
                                className={`
                                text-unselected 
                                text-md 
                                ${props.index % 2 === 0 ? "text-right" : "text-left"}
                            `}
                            >
                                {props.project.desc}
                            </p>
                        </div>

                        {/* Technologies used */}
                        <div
                            className={` 
                            flex 
                            items-center 
                            gap-3 
                            ${props.index % 2 === 0 ? "self-end" : "self-start"}
                        `}
                        >
                            {props.project.skillUsed.map((skill) => (
                                <Image
                                    key={skill}
                                    src={`/assets/skills/${skill}.svg`}
                                    alt={skill}
                                    width={25}
                                    height={25}
                                    className='cursor-pointer'
                                />
                            ))}
                        </div>

                        {/* Link */}
                        <div
                            className={`
                            flex 
                            items-center 
                            justify-around 
                            gap-5 
                            ${props.index % 2 === 0 ? "self-end" : "self-start"}
                        `}
                        >
                            <Icon
                                size='medium'
                                href={props.project.githubURL}
                                target='_blank'
                                icon={FiGithub}
                                label="Github"
                            />
                            <Icon
                                size='medium'
                                href={props.project.siteURL}
                                target='_blank'
                                icon={FiExternalLink}
                                label='Website'
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className='relative flex md:hidden p-2 sm:p-3 w-[100%] shadow-lg h-auto'
            >
                <div className='h-full w-full rounded-sm shadow-xl'>
                    <div className='relative h-[420px]'>
                        <Image
                            src={`/assets/projects/${props.project.img}`}
                            alt={props.project.title}
                            fill
                            objectFit='cover'
                        />
                    </div>
                    <div
                        className='
                            absolute 
                            inset-0 
                            h-full 
                            w-full 
                            transition 
                            duration-300 
                            rounded-sm
                            bg-[#0D2034]
                            opacity-[95%] 
                        '
                    >

                        <div className='p-4 sm:p-12 justify-around flex gap-5 flex-col  min-h-[420px]'>
                            <div className='flex flex-col gap-3'>
                                <h4 className='text-primary font-semibold font-roboto'>Featured Project</h4>
                                <h5 className='text-white text-3xl font-bold'>{props.project.title}</h5>
                            </div>

                            <p className='text-white text-md'>
                                {props.project.desc}
                            </p>

                            <TechnologiesUsed technologies={props.project.skillUsed} />


                            <div className='flex gap-5 mx-1'>
                                <Icon
                                    size='medium'
                                    href={props.project.githubURL}
                                    target='_blank'
                                    icon={FiGithub}
                                    label='Github'
                                />
                                <Icon
                                    size='medium'
                                    href={props.project.siteURL}
                                    target='_blank'
                                    icon={FiExternalLink}
                                    label='Website'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Project