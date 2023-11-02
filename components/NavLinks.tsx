import { navLinks } from '@/constants/navLinks'
import React from 'react'
import Button from './Button'

type Props = {
    mobileView: boolean
}

const NavLinks = (props: Props) => {
    return (
        <>
            <ul
                id='links'
                className={`
                    flex
                    font-roboto
                    ${props.mobileView
                        ?
                        'text-xl flex-col items-center gap-12'
                        :
                        'text-[13.5px] flex-row items-center gap-5'
                    }
                `}>
                {
                    navLinks?.map((navItem, idx) => (
                        <li
                            key={navItem.title}
                            className='p-1'
                        >
                            <a
                                href={navItem.href}
                                className='flex gap-1'
                            >
                                <span className='text-highlight-200'>
                                    0{Number(idx + 1)}.
                                </span>

                                <span className='tracking-wide hover:text-highlight-200'>
                                    {navItem.title}
                                </span>
                            </a>
                        </li>
                    ))
                }

                <a download href='/assets/amitKumarShawResume.pdf'>
                    <Button
                        fontSize={props.mobileView ? '1rem' : 'text-sm'}
                        fullWidth={true}
                    >
                        Resume
                    </Button>
                </a>
            </ul>
        </>
    )
}

export default NavLinks