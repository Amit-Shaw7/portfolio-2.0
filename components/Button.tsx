import React from 'react'

type Props = {
    title: string,
    fullWidth?: boolean,
    fontSize?: string
    px?: string,
    size? : 'small' | 'medium' | 'large'
}

const Button = ({ title, fullWidth, fontSize, px , size }: Props) => {
    return (
        <div className={`
            bg-highlight 
            rounded-md
            w-fit
        `}>
            <button
                className={`
                bg-primary 
                py-2  
                rounded-md 
                border 
                font-roboto
                border-highlight 
                text-highlight 
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
                {title}
            </button>
        </div>
    )
}

export default Button