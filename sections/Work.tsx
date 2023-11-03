"use client";
import React, { useState } from 'react'
import Heading from '@/components/Heading'
import WorkDetails from '@/components/WorkDetails';
import Tab from '@/components/tabs/Tab'
import Tabs from '@/components/tabs/Tabs'
import { works } from '@/constants/works';
import {motion} from 'framer-motion'
import { base, finalOpacity, finalY, initialOpacity, initialYMaxFromTop } from '@/constants/framerMotionConfig';

const Work = () => {
    const [selectedTab, setSelectedTab] = useState(works[0].org);
    const handleSelectedTabs = (value: string) => {
        setSelectedTab(value);
    }
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
            id='work'
            className='py-20'
        >
            <Heading title="Where I've Worked" index={5} />

            <div className='px-4 flex md:flex-row flex-col gap-8 w-full min-h-[50vh] md:min-h-full'>
                <div className='w-[300px]'>
                    <Tabs>
                        {
                            works.map((work) => (
                                <Tab
                                    key={work.org}
                                    onClick={() => handleSelectedTabs(work.org)}
                                    selected={selectedTab === work.org}
                                    label={work.org}
                                />
                            ))
                        }

                    </Tabs>
                </div>

                <div>
                    <WorkDetails company={selectedTab} />
                </div>
            </div>
        </motion.section>
    )
}

export default Work