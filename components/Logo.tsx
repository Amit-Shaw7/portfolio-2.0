'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fast, finalOpacity, initialOpacity } from '@/constants/framerMotionConfig';

const Logo = () => {
    return (
        <Link
            id="logo"
            className='w-max relative z-50'
            href="/"
        >
            <motion.div
                initial={{
                    opacity: initialOpacity
                }}
                animate={{
                    opacity: finalOpacity
                }}
                transition={{
                    duration: fast,
                    delay: 0.1
                }}
            >
                <Image
                    className='cursor-pointer transition-all duration-200'
                    width={50}
                    height={50}
                    src="/logo/logo.png"
                    alt="website logo"
                />
            </motion.div>
        </Link>
    )
}

export default Logo