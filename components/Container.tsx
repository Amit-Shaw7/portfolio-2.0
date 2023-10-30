import React from 'react'

const Container: React.FC<{ children: React.ReactNode }> = (
    { children }
) => {
    return (
        <div className='
            w-full
            px-6 sm:px-12 md:px-20 lg:px-32 xl:px-64
        '>

            {children}
        </div>
    )
}

export default Container