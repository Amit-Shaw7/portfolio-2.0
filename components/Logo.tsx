import Image from 'next/image'
import React from 'react'

const Logo = ({ scrolled }: { scrolled: boolean }) => {
    return (
        <div
            id="logo"
            className='w-max'
        >
            <Image
                className='cursor-pointer transition-all duration-200'
                width={50}
                height={50}
                src="/logo/logo-with-border-cropped-transparent.png"
                alt="logo"
            />
        </div>
    )
}

export default Logo