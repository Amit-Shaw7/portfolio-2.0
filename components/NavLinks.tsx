import React from 'react'
import Button from './Button'
import { navLinks } from '@/constants/navLinks'
import { motion } from 'framer-motion'

type Props = {
    mobileView: boolean,
    handleClose : () => void
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
                        <motion.li
                            onClick={props.handleClose}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: idx / 10 + 0.1 }}
                            key={navItem.title}
                            className='p-1'
                        >
                            <a
                                href={navItem.href}
                                className='flex gap-1'
                            >
                                <span className='text-primary'>
                                    0{Number(idx + 1)}.
                                </span>

                                <span className='tracking-wide hover:text-primary'>
                                    {navItem.title}
                                </span>
                            </a>
                        </motion.li>
                    ))
                }

                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className='p-1'
                >
                    <a
                        // download
                        href='/amitKumarShawResume.pdf'
                        target='_blank'
                    >
                        <Button
                            fontSize={props.mobileView ? '1rem' : 'text-sm'}
                            fullWidth={true}
                        >
                            Resume
                        </Button>
                    </a>
                </motion.li>
            </ul>
        </>
    )
}

export default NavLinks