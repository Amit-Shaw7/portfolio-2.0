import React from 'react'
import { myGmail } from '@/constants/email';
import LeftSocialLinks from './LeftSocialLinks';
import RightMailTo from './RightMailTo';

const Wrapper = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='w-full mt-[130px] sm:mt-[150px]'>
            <LeftSocialLinks />

            <div
                id='main-content'
            >
                {children}
            </div>

            <RightMailTo />
        </div>
    )
}

export default Wrapper