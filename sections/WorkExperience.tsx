"use client";
import Heading from '@/components/Heading'
import WorkDetails from '@/components/WorkDetails';
import Tab from '@/components/tabs/Tab'
import Tabs from '@/components/tabs/Tabs'
import { workExperience } from '@/constants/workExperience';
import React, { useState } from 'react'

const WorkExperience = () => {
    const [selectedTab, setSelectedTab] = useState(workExperience[0].org);
    const handleSelectedTabs = (value: string) => {
        setSelectedTab(value);
    }
    return (
        <section id='#experience' className='py-20'>
            <Heading title="Where I've Worked" index={5} />

            <div className='px-4 flex md:flex-row flex-col gap-8 w-full min-h-[50vh] md:min-h-full'>
                <div className='w-[300px]'>
                    <Tabs>
                        {
                            workExperience.map((experience) => (
                                <Tab
                                    key={experience.org}
                                    onClick={() => handleSelectedTabs(experience.org)}
                                    selected={selectedTab === experience.org}
                                    label={experience.org}
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

export default WorkExperience