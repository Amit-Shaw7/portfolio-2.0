import Heading from '@/components/Heading'
import Overlay from '@/components/Overlay'
import { skillArr } from '@/constants/skills'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
    return (
        <div className='py-20'>
            <Heading title='Skills' index={2} />
            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 px-4 gap-10'>
                    {
                        skillArr.map((skill) => (
                            <div key={skill.name} className='p-5 border border-highlight rounded-full w-max h-max relative'>

                                <Image
                                    src={`/assets/skills/${skill?.img}`}
                                    height={50}
                                    width={50}
                                    objectFit='cover'
                                    alt='Javascript'
                                    className='rounded-md'
                                />

                                {/* <span className='-top-12 uppercase  bg-bg border border-highlight p-1 rounded-md absolute text-unselected peer-hover:flex'>Javascript</span> */}
                                <Overlay
                                    className='
                                        bg-highlight-200 
                                        opacity-40 
                                        rounded-full  
                                        hover:opacity-0
                                    '
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills