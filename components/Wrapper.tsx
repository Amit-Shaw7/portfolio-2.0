import { socialLinks } from '@/constants/socialLinks'
import React from 'react'
import Icon from './Icon';
import { myGmail } from '@/constants/email';

const Wrapper = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='w-full mt-[130px] sm:mt-[150px]'>
            {/* -------------------------- left side social links -------------------------- */}
            <div
                id='social-links'
                aria-label='social-links'
                className='hidden md:flex fixed flex-col justify-center items-center gap-5 bottom-0 left-6 lg:left-12'
            >
                <div className='flex justify-end gap-5 flex-col px-2'>
                    {
                        socialLinks.map((item) => (
                            <Icon
                                size='large'
                                key={item.name}
                                href={item.url}
                                icon={item.icon}
                                target='_blank'
                            />
                        ))
                    }
                </div>
                <div className='h-24 w-[1px] bg-unselected'></div>
            </div>


            {/* -------------------------- hero component -------------------------- */}
            <div
                id='main-content'
                aria-label='main-content'
            >
                {children}
            </div>


            {/* -------------------------- right side mail to link -------------------------- */}
            <div
                id='mail-links'
                aria-label='mail-links'
                className='hidden md:flex fixed flex-col items-center justify-center bottom-0 right-6 lg:right-12 writing-mode-vertical-rl gap-5'
            >
                <a
                    className='text-vertical text-xs font-roboto text-unselected font-lighter tracking-[3px]'
                    href={`mailto:${myGmail}`}
                >
                    {myGmail}
                </a>
                <div className='h-24 w-[1px] bg-unselected'></div>
            </div>
        </div>
    )
}

export default Wrapper