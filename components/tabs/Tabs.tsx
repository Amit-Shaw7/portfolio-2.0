import React from 'react'
type Props = {
  children: React.ReactNode
}

const Tabs = (props: Props) => {

  return (
    <div className='h-full w-full flex gap-1 flex-row md:flex-col overflow-x-scroll whitespace-nowrap scrollbar-none'>
      {props.children}
    </div>
  )
}

export default Tabs