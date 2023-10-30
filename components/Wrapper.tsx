import { socialLinks } from '@/constants/socialLinks'
import React from 'react'

const Wrapper = ({
    children
}: {
    children: React.ReactNode
}) => {
    const email = "amitkumar8017392@gmail.com";
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
                            <a
                                key={item.name}
                                className='hover:text-highlight hover:-translate-y-1 text-unselected transition duration-300 text-lg'
                                href={item.url}
                            >
                                <item.icon />
                            </a>
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
                    href="mailto:amitkumar8017392@gmail.com"
                >
                    {email}
                </a>
                <div className='h-24 w-[1px] bg-unselected'></div>
            </div>
        </div>
    )
}

export default Wrapper