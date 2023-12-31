import React from 'react'
import { MdClose } from 'react-icons/md'
import Logo from './Logo'
import NavLinks from './NavLinks'

type Props = {
  open: boolean,
  handleMenuClose: () => void,
  scrolled: boolean
}

const MobileNavbar = (props: Props) => {
  return (
    <>
      <div className={`
          font-roboto
          fixed 
          top-0 
          left-[-10px] 
          h-full 
          w-full 
          md:hidden 
          bg-bg 
          shadow-lg 
          shadow-primary 
          transform 
          transition-transform 
          duration-300 
          z-50
          ${props.open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className='flex items-center justify-between py-4 px-6'>
          <Logo />
          <div
            onClick={props.handleMenuClose}
            id="close-menu-btn"
          >
            <MdClose className='text-3xl' />
          </div>
        </div>

        <div className='flex md:hidden items-start justify-center'>
          <NavLinks handleClose={props.handleMenuClose} mobileView={true} />
        </div>
      </div>
    </>
  )
}

export default MobileNavbar