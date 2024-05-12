import React from 'react'
import { works } from '@/constants/works'
import { MdArrowRight } from 'react-icons/md'
import Icon from './Icon'
import { FiExternalLink } from 'react-icons/fi'

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
                    <a href={data?.orgUrl} target='_blank' className='text-primary'> @ {data?.org}</a>
                </h3>
                <div className='flex items-center gap-5'>
                    <span className='text-gray'>{data?.startDate} - {data?.endDate}</span>
                    {data?.proofUrl && <Icon
                        size='medium'
                        href={data?.proofUrl || ""}
                        target='_blank'
                        icon={FiExternalLink}
                        label='Website'
                    />}
                </div>
            </div>

            <ul className='md:ml-4 flex flex-col gap-3 text-unselected justify-start items-start text-md'>
                {
                    data?.responsibilities.map((responsibility) => (
                        <li key={responsibility} className='flex items-start'>
                            <span><MdArrowRight className='text-lg text-primary' /></span>
                            <span className='text-sm'>{responsibility}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WorkDetails