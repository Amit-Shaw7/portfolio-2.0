import React from 'react'

type Props = {
    title: string,
    index: number,
}

const Heading = (props: Props) => {
    return (
        <div className='flex items-center gap-5 mb-20'>
            <h4 className='text-2xl  font-bold font-nunito text-white '>
                <span className='text-primary'>0{props.index}.</span>
                &nbsp;
                {props.title}
            </h4>
            <div className='hidden sm:block h-[0.2px] w-[150px] md:w-[300px] bg-gray '></div>
        </div>
    )
}

export default Heading