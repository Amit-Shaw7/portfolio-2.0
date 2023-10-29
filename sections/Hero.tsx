import Button from '@/components/Button'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id="#hero">
      <div className="w-full xl:px-44 lg:px-12 px-4 py-4 font-nunito">
          <div className='w-full'>
            <p className='text-xl text-highlight font-roboto'>Hii , I am</p>
            <p className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mt-5'>Amit Kumar Shaw</p>
            <p className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-unselected font-bold text-unselecteds mt-4'>I build things for the web</p>
          </div>

          <div className='my-12 font-roboto'>
            <p className='text-unselected  text-sm lg:text-lg'>
              I am a full stack web developer skilled in MERN Stack focused more
              <br />
              in building responsive web applications using React.js.
              <br />
              I have a passion for creating responsive and user-friendly web applications.
            </p>
          </div>

          <Button size='large' title='Get in touch' fullWidth={false} />
      </div>
    </section>
  )
}

export default Hero