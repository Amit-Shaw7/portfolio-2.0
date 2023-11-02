import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ scrolled }: { scrolled: boolean }) => {
    return (
        <Link
            id="logo"
            className='w-max'
            href="/"
        >
            <Image
                className='cursor-pointer transition-all duration-200'
                width={50}
                height={50}
                src="/logo/logo-with-border-cropped-transparent.png"
                alt="logo"
            />
        </Link>
    )
}

export default Logo