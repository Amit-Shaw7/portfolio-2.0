'use client';
import React, { useState, useEffect } from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'
import { MdMenu } from 'react-icons/md'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const handleMenuOpen = () => {
        setOpen(true);
    }

    const handleMenuClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30; // You can adjust the scroll position as needed
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`
                font-roboto
                fixed 
                w-full 
                top-0 
                z-50
                transition-all
                duration-300 
                flex items-center 
                justify-between 
                px-2 sm:px-4 md:px-12 
                backdrop-filter 
                backdrop-blur-md
                drop-shadow-lg
                bg-transparent
                text-unselected
                ${scrolled ? 'h-[60px]' : 'h-[100px]'} 
                ${scrolled ? 'shadow-sm shadow-primary-200/10' : 'h-[100px]'} 
            `}>
                <Logo />
                <div className='hidden md:flex'>
                    <NavLinks
                        handleClose={() => { }}
                        mobileView={false}
                    />
                </div>
                <div onClick={handleMenuOpen} id="menu-button" className='flex md:hidden'>
                    <MdMenu className="text-3xl" />
                </div>
            </nav>
            <MobileNavbar
                scrolled={scrolled}
                open={open}
                handleMenuClose={handleMenuClose}
            />
        </>
    )
}

export default Navbar