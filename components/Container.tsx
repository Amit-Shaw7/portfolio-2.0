import React from 'react'

const Container: React.FC<{ children: React.ReactNode }> = (
    { children }
) => {
    return (
        <div className='
            w-full
            px-2 sm:px-8 md:px-28 lg:px-20 xl:px-28
        '>

            {children}
        </div>
    )
}

export default Container