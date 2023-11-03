'use client';
import React from 'react'
import Icon from './Icon'
import { socialLinks } from '@/constants/socialLinks'
import { motion } from 'framer-motion'
import { finalOpacity, initialOpacity, slow } from '@/constants/framerMotionConfig';

const LeftSocialLinks = () => {
    return (
        <motion.div
            initial={{
                opacity: initialOpacity
            }}
            animate={{
                opacity: finalOpacity
            }}
            transition={{
                duration: slow,
                delay: 1.5
            }}
            id='social-links'
            className='hidden md:flex fixed flex-col justify-center items-center gap-5 bottom-0 left-6 lg:left-12'
        >
            <div className='flex justify-end gap-5 flex-col px-2'>
                {
                    socialLinks.map((item) => (
                        <Icon
                            size='large'
                            key={item.name}
                            href={item.url}
                            icon={item.icon}
                            target='_blank'
                        />
                    ))
                }
            </div>
            <div className='h-24 w-[1px] bg-unselected'></div>
        </motion.div>
    )
}

export default LeftSocialLinks