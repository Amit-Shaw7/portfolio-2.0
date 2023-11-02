import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { myGmail } from '@/constants/email'
import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-20'>
            <Heading title="What's Next?" index={5} />
            <div className='flex items-center flex-col gap-7'>
                <h3 className='text-5xl font-extrabold text-highlight font-roboto'>Get in Touch</h3>
                <p className='text-lg text-center text-unselected font-nunito w-[300px] md:w-[600px]'>
                    I am looking for an oppertunity So , if you wanna give me that or have any question or just wanna say hi
                    you can contact me through mail by clicking the button below.
                </p>

                <a href={`mailto:${myGmail}`}>
                    <Button size='large' >
                        Say Hii
                    </Button>
                </a>
            </div>

        </section>
    )
}

export default Contact