import React from 'react'
type Props = {
  children: React.ReactNode
}

const Tabs = (props: Props) => {

  return (
    <div className='h-full w-full flex flex-row md:flex-col'>
      {props.children}
    </div>
  )
}

export default Tabs