import React from 'react'
type Props = {
    label: string,
    selected?: boolean,
    value?: string,
    onClick?: () => void
}

const Tab = (props: Props) => {
    return (
        <div
            onClick={props.onClick}
            className={`
                font-roboto 
                px-4 
                py-2 
                 cursor-pointer
                ${props.selected ? "md:border-l-2 border-b-2  md:border-l-highlight border-b-highlight" : "md:border-l-2 border-b-gray md:border-l-gray"} 
                hover:bg-highlight 
                hover:bg-opacity-10 
                transition 
                duration-700
                w-max
                ${props.selected ? "text-highlight" :"text-gray"}
            `}
        >
            <span>{props.label}</span>
        </div>
    )
}

export default Tab