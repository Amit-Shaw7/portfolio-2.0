import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    key?: string,
    icon: IconType,
    href: string,
    target?: '_blank' | '_parent' | '_self' | '_top',
    size: 'small' | 'medium' | 'large'
}

const Icon = (props: Props) => {
    return (
        <a
            target={props.target ? props.target : ''}
            href={props.href}
            className={`
                text-unselected 
                hover:text-primary 
                transition 
                duration-300 
                hover:-translate-y-1
            `}
        >
            <props.icon
                className={`
                    ${props.size === 'small' ? 'text-sm' : props.size === 'medium' ? 'text-md' : 'text-xl'}
                `}
            />
        </a>
    )
}

export default Icon