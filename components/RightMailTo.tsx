'use client';
import React from 'react'
import { myGmail } from '@/constants/email'
import { motion } from 'framer-motion'
import { finalOpacity, initialOpacity, slow } from '@/constants/framerMotionConfig';


const RightMailTo = () => {
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
            id='mail-links'
            className='hidden md:flex fixed flex-col items-center justify-center bottom-0 right-6 lg:right-12 writing-mode-vertical-rl gap-5'
        >
            <a
                className='text-vertical text-xs font-roboto text-unselected font-lighter tracking-[3px]'
                href={`mailto:${myGmail}`}
            >
                {myGmail}
            </a>
            <div className='h-24 w-[1px] bg-unselected'></div>
        </motion.div>
    )
}

export default RightMailTo