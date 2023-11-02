import Heading from '@/components/Heading'
import Overlay from '@/components/Overlay'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about" className='py-20'>
      <Heading index={1} title='About' />
      <div className='px-4 flex justify-between md:flex-row flex-col gap-5 w-full h-auto'>
        <div className='w-full md:w-[60%] lg:w-[60%] flex flex-col gap-7'>
          <p className='text-slate-400 text-md font-nunito leading-7'>
            Hi, I&apos;m Amit Kumar Shaw, and I am a
            <span className='text-highlight font-semibold'> Full Stack Web Developer</span>.
            I mostly focus on
            <span className='text-highlight font-semibold'> React Js</span>,
            which is a part of a group of tools in
            <span className='text-highlight font-semibold'> MERN Stack</span>,
            and I also know a bit about
            <span className='text-highlight font-semibold'> Next Js</span>.
            I finished my BCA (that&apos;s
            <span className='text-highlight font-semibold'> Bachelor of Computer Applications) </span>
            at Heritage Academy in 2022 with a grade of
            <span className='text-highlight font-semibold'> 9.0</span>.
          </p>

          <p className='text-slate-400 text-md font-nunito leading-7'>
            I really like making things for the internet. 
            I&apos;ve been learning how to build websites and web apps for a while now. 
            I find it interesting and enjoy making web pages that look good and work well for the people who use them.
          </p>

          <p className='text-slate-400 text-md font-nunito leading-7'>
            I&apos;m good at building cool stuffs, and working with other people to finish projects. 
            I&apos;m always trying to learn new stuff in web development because things change quickly and I want to stay up to date.
            I&apos;m excited about building things for the web and I&apos;m always ready for new challenges in making things for the web.
          </p>
        </div>

        <div className='h-[300px] w-full md:w-[40%] lg:w-[40%] xl:w-[252px] flex items-center md:items-start justify-center'>
          <div className='w-[252px] h-[252px] md:h-[80%] lg:h-[80%]  relative'>
            <Overlay className='
                peer
                z-20
                opacity-40 
                hover:opacity-0 
                hover:-translate-x-1 
                hover:-translate-y-1 
                bg-highlight 
                rounded-sm
              '
            />

            <div className='
                absolute 
                top-3 
                left-3 
                w-full 
                h-full 
                border 
                border-highlight-200 
                rounded-sm
                peer-hover:translate-x-1 
                peer-hover:translate-y-1 
                transition 
                duration-300
              '
            ></div>

            <Image
              src="/assets/me.jpg"
              fill={true}
              alt='Amit Kumar Shaw'
              className='
                rounded-sm
                peer-hover:-translate-x-1 
                peer-hover:-translate-y-1
                transition
                duration-300
                object-cover
              '
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About