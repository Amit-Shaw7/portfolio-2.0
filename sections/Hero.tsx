'use client';
import React from 'react'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import { initialOpacity, finalOpacity, initialXMin, finalX, base } from '@/constants/framerMotionConfig'

const Hero = () => {
  return (
    <section id="#home" className='h-[80vh]'>
      <div className="w-full py-4 font-nunito">
        <motion.div
          initial={{
            x: initialXMin,
            opacity: initialOpacity
          }}
          animate={{
            x: finalX,
            opacity: finalOpacity
          }}
          transition={{
            duration: base,
            delay: 0.8
          }}
          className='w-full'
        >
          <p className='text-xl text-primary font-roboto'>Hii , I am</p>
          <p className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold mt-5'>Amit Kumar Shaw</p>
          <p className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl text-unselected font-bold text-unselecteds mt-4'>I build things for the web.</p>
        </motion.div>

        <motion.div
          initial={{
            x: initialXMin,
            opacity: initialOpacity
          }}
          animate={{
            x: finalX,
            opacity: finalOpacity
          }}
          transition={{
            duration: base,
            delay: 1
          }}
          className='my-12'
        >
          <p className='text-unselected font-nunito tracking-wide text-sm lg:text-[16px] leading-6'>
            I am a full stack web developer skilled in MERN Stack focused more
            <br />
            in building responsive web applications using React.js.
            <br />
            I have a passion for creating responsive and user-friendly web applications.
          </p>
        </motion.div>

        <motion.a
          initial={{
            x: initialXMin,
            opacity: initialOpacity
          }}
          animate={{
            x: finalX,
            opacity: finalOpacity
          }}
          transition={{
            duration: base,
            delay: 1.2
          }}
          href="#contact"
          className='h-full w-full'
        >
          <Button
            size='large'
            fullWidth={false}
          >
            Get in touch
          </Button>
        </motion.a>
      </div>
    </section>
  )
}

export default Hero