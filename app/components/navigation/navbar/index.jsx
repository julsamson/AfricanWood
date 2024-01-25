import React from 'react'
import Link from 'next/link'
import Hamburger from 'hamburger-react'

export default function Navbar( { isOpen, toggle, setIsOpen }) {
    return (
        <div className=''>
            <div className='  bg-white shadow-lg shadow-black/40 w-full text-black'>
                <section>

                    <nav className='flex justify-between container mx-auto py-8 px-4'>

                        <div>
                            Logo
                        </div>

                        <div className='flex md:hidden'>
                            <Hamburger toggled={isOpen} toggle={setIsOpen} />
                        </div>

                        <div className='md:flex hidden'>
                            <ul className='flex items-center gap-x-5'>
                                <li>
                                    <Link href='#' className='hover:text-red-600'>
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/about' className='hover:text-red-600'>
                                        ABOUT US
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='hover:text-red-600'>
                                        TALENT
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contacts' className='hover:text-red-600'>
                                        CONTACTS
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/registration' className='hover:text-red-600'>
                                        TALENT REGISTRATION
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/login' className='hover:text-red-600'>
                                        LOGIN
                                    </Link>
                                </li>
                            </ul>
                            {/* <MenuOpenIcon /> */}

                            <div>

                            </div>
                        </div>

                    </nav>
                </section>
            </div>
        </div>
    )
}
