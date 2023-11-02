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
                ${props.selected ? "border-b-2 border-b-primary md:border-b-0 md:border-l-2 md:border-l-primary" : "border-b-2 md:border-l-2 md:border-b-0 border-b-gray md:border-l-gray"} 
                hover:bg-primary 
                hover:bg-opacity-10 
                transition 
                duration-700
                w-max
                ${props.selected ? "text-primary" :"text-gray"}
            `}
        >
            <p className='flex'>{props.label}</p>
        </div>
    )
}

export default Tab