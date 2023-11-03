'use client';
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import Overlay from '@/components/Overlay'
import { skillArr } from '@/constants/skills'
import { motion } from 'framer-motion'
import { base, fast, finalOpacity, finalY, initialOpacity, initialYMaxFromTop, initialYMinFromTop } from '@/constants/framerMotionConfig'

const Skills = () => {
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
            id="skills"
            className='mt-10 py-20'
        >
            <Heading title='Skills' index={2} />
            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 px-4 gap-10'>
                    {
                        skillArr.map((skill , idx) => (
                            <motion.div
                                initial={{
                                    opacity: initialOpacity,
                                    y: initialYMinFromTop
                                }}
                                whileInView={{
                                    opacity: finalOpacity,
                                    y: finalY
                                }}
                                transition={{
                                    duration: fast,
                                    delay: idx * 0.1
                                }}
                                viewport={{ once: true }}
                                key={skill.name}
                                className='p-5 border border-primary rounded-full w-max h-max relative'
                            >

                                <Image
                                    src={`/assets/skills/${skill?.img}`}
                                    height={50}
                                    width={50}
                                    objectFit='cover'
                                    alt='Javascript'
                                    className='rounded-md'
                                />

                                <Overlay
                                    className='
                                        bg-primary 
                                        opacity-40 
                                        rounded-full  
                                        hover:opacity-0
                                    '
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.section>
    )
}

export default Skills