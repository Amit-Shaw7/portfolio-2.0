"use client";
import Heading from '@/components/Heading'
import WorkDetails from '@/components/WorkDetails';
import Tab from '@/components/tabs/Tab'
import Tabs from '@/components/tabs/Tabs'
import { works } from '@/constants/works';
import React, { useState } from 'react'

const Work = () => {
    const [selectedTab, setSelectedTab] = useState(works[0].org);
    const handleSelectedTabs = (value: string) => {
        setSelectedTab(value);
    }
    return (
        <section id='work' className='py-20'>
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
        </section>
    )
}

export default Work