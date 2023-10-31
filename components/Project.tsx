import Image from 'next/image'
import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

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
            <div key={props.index} className={`md:flex hidden ${props.index % 2 === 0 ? "flex-row" : "flex-row-reverse"} h-[350px]`}>
                {/* <a href=""> */}
                <div className='relative flex items-center justify-center h-[330px] w-[60%]'>
                    <div
                        className='
                        absolute 
                        inset-0 
                        z-20
                        opacity-40 
                        hover:opacity-0 
                        transition 
                        duration-300 
                        bg-highlight 
                        w-full 
                        h-full 
                        rounded-sm
                    '>
                    </div>
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
                    '/>
                </div>
                {/* </a> */}

                <div className={`font-nunito w-[40%] rounded-md ${props.index % 2 === 0 ? "-ml-10" : "-mr-10"} relative z-20 py-5`}>
                    <div className='h-full w-full flex flex-col  justify-between'>
                        {/* Heading and Project name */}
                        <div aria-label='heading-and-project-name' className={`w-full ${props.index % 2 === 0 ? "text-right" : "text-left"}`}>
                            <h5 className='text-highlight font-semibold font-roboto'>Featured Project</h5>
                            <h3 className='text-unselected text-3xl font-bold'>{props.project.title}</h3>
                        </div>

                        {/* Project description card */}
                        <div
                            aria-label='project-description'
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
                            aria-label='technologies-used'
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
                            aria-label='link'
                            className={`
                            flex 
                            items-center 
                            justify-around 
                            gap-5 
                            ${props.index % 2 === 0 ? "self-end" : "self-start"}
                        `}
                        >
                            <a
                                target='_blank'
                                href={props.project.githubURL}>
                                <FiGithub />
                            </a>
                            <a
                                target='_blank'
                                href={props.project.siteURL}>
                                <FiExternalLink />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative flex md:hidden p-2 sm:p-3 w-[100%] shadow-lg h-auto'>
                <div className='h-full w-full rounded-sm shadow-xl'>
                    <div className='relative h-[400px]'>
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
                        transition 
                        duration-300 
                        bg-[#0D2034]
                        opacity-[95%] 
                        w-full 
                        h-full 
                        rounded-sm
                    '
                    >

                        <div className='p-2 md:p-10 justify-around flex gap-5 flex-col  min-h-[400px]'>
                            <div className='flex flex-col gap-3'>
                                <h5 className='text-highlight font-semibold font-roboto'>Featured Project</h5>
                                <h3 className='text-white text-3xl font-bold'>{props.project.title}</h3>
                            </div>

                            <p className='text-white text-md'>
                                {props.project.desc}
                            </p>

                            <div className='flex items-center gap-3'>
                                {props.project.skillUsed.map((skill) => (
                                    <Image
                                        key={skill}
                                        src={`/assets/skills/${skill}.svg`}
                                        alt={skill}
                                        width={20}
                                        height={20}
                                        className='cursor-pointer'
                                    />
                                ))}
                            </div>


                            <div className='flex gap-5 mx-1'>
                                <a
                                    target='_blank'
                                    href={props.project.githubURL}>
                                    <FiGithub className='text-lg' />
                                </a>
                                <a
                                    target='_blank'
                                    href={props.project.siteURL}>
                                    <FiExternalLink className='text-xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Project