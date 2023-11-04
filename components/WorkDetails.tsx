import React from 'react'
import { works } from '@/constants/works'
import { BiSolidRightArrow } from 'react-icons/bi'

type Props = {
    company: string
}

const WorkDetails = (props: Props) => {
    const data = works.find((work) => work.org === props.company);
    return (
        <div className='flex flex-col gap-5 font-nunito '>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl'>
                    <span className='text-white'>{data?.jobTitle}</span>
                    <span className='text-primary'> @ {data?.org}</span>
                </h3>
                <span className='text-gray'>{data?.startDate} - {data?.endDate}</span>
            </div>

            <ul className='ml-4 list-disc flex flex-col gap-2 text-unselected justify-start items-start text-md'>
                {
                    data?.responsibilities.map((responsibility) => (
                        <li key={responsibility} className='flex items-start'>
                            {responsibility}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WorkDetails