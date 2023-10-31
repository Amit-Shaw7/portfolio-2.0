import Image from 'next/image'
import React from 'react'

type Props = {
    technologies: string[]
}

const TechnologiesUsed = (props: Props) => {
    return (
        <div className='flex items-center gap-3'>
                {
                    props.technologies.map((technology) => (
                        <Image
                            key={technology}
                            src={`/assets/skills/${technology}.svg`}
                            alt={technology}
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                    ))
                }
            </div>
    )
}

export default TechnologiesUsed