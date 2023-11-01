import React from 'react'
type Props = {
    className?: string,
}

const Overlay = (props: Props) => {
    return (
        <div
            className={`
                absolute 
                inset-0 
                w-full 
                h-full 
                z-20
                transition 
                duration-300                 
                ${props.className}
            `}>
        </div>
    )
}

export default Overlay