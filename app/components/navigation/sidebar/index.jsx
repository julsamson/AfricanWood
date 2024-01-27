import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className='container mx-auto'>
            <div className='bg-white text-black'>
                <section>
                    <nav className='container mx-auto py-[12px] hidden'>
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
        </div>
    )
}
