import React from 'react'

type Props = {
    fullWidth?: boolean,
    fontSize?: string
    px?: string,
    size? : 'small' | 'medium' | 'large',
    children : React.ReactNode
}

const Button = ({ fullWidth, fontSize, px , size , children }: Props) => {
    return (
        <div className={`
            bg-primary 
            rounded-md
            w-fit
        `}>
            <button
                className={`
                bg-bg 
                py-2  
                rounded-md 
                border 
                font-roboto
                border-primary 
                text-primary 
                hover:-translate-x-1
                hover:-translate-y-1
                transition-all
                duration-200
                font-semibold
                tracking-wider
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${fontSize ? `text-[${fontSize}]` : "text-sm"}
                ${px ? `px-[${px}]` : "px-4"}
                ${size === "small" && "text-sm py-2 px-4"}
                ${size === "medium" && "text-md py-3 px-6"}
                ${size === "large" && "text-lg py-4 px-8"}
            `}
            >
                {children}
            </button>
        </div>
    )
}

export default Button