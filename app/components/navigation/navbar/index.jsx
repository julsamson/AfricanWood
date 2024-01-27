'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };


    return (
        <div className=''>
            <div className='  bg-white shadow-lg shadow-black/40 w-full text-black'>
                <section>

                    {/* navigation tab button  */}

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

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='md:hidden '
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={variants}
                    >
                        <div className='bg-white text-black'>
                            <section>
                                <nav className='container mx-auto py-[12px] px-5'>
                                    <ul className='space-y-4 mb-2'>
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
                                            <Link href='/registrationz' className='hover:text-red-600'>
                                                TALENT REGISTRATION
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/login' className='hover:text-red-600'>
                                                LOGIN
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
