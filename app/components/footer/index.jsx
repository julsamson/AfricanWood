import React from 'react'
import Link from 'next/link'

export default function Footer() {

    const currentDate = new Date();

    const formatDate = currentDate.getFullYear();

    return (
        <div>
            <div className='bg-black/60 text-gray-400 border-t-2 border-red-600'>
                <section className='container mx-auto mt-4'>
                    <div className='space-y-2 flex flex-wrap justify-between my-4 w-full'>
                        <div className='max-[700px]:w-full min-[700px]:w-[350px] lg:w-[200px] m-2'>
                            <h2 className='relative text-3xl font-semibold py-3'>
                                Special Pages
                                <span className="absolute bottom-0 left-0 bg-red-400 w-14 h-1"></span>
                            </h2>
                            <ul className='space-y-4 pt-4'>
                                <li>
                                    <Link href='#'>Home</Link>
                                </li>
                                <li>
                                    <Link href='#'>About Us</Link>
                                </li>
                                <li>
                                    <Link href='#'>Talent Director</Link>
                                </li>
                                <li>
                                    <Link href='#'>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='max-[700px]:w-full min-[700px]:w-[350px] lg:w-[200px] m-2'>
                            <h2 className='relative text-3xl font-semibold py-3'>
                                Our services
                                <span className="absolute bottom-0 left-0 bg-red-400 w-14 h-1"></span>
                            </h2>
                            <ul className='space-y-4 pt-4'>
                                <li>
                                    <Link href='#'>Intro Modelling</Link>
                                </li>
                                <li>
                                    <Link href='#'>Runaway Modelling </Link>
                                </li>
                                <li>
                                    <Link href='#'>Professional Classes</Link>
                                </li>
                                <li>
                                    <Link href='#'>Photoshoots</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='max-[700px]:w-full min-[700px]:w-[350px] lg:w-[200px] m-2'>
                            <h2 className='relative text-3xl font-semibold py-3'>
                                Agency
                                <span className="absolute bottom-0 left-0 bg-red-400 w-14 h-1"></span>
                            </h2>
                            <ul className='space-y-4 pt-4'>
                                <li>
                                    <Link href='#'>Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link href='#'>Licenses</Link>
                                </li>
                                <li>
                                    <Link href='#'>Become a Member</Link>
                                </li>
                                <li>
                                    <Link href='#'>Help Center</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='max-[700px]:w-full min-[700px]:w-[350px] lg:w-[200px] m-2'>
                            <ul className='space-y-6 pt-4   '>
                                <li>
                                    <Link href='#' className='flex gap-4 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border border-red-500 rounded-full bg-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <div>
                                            <h1>
                                                Arusha Tanzania,
                                            </h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='flex gap-4 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border border-red-500 rounded-full bg-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                        <div>
                                            <h1>07123456987</h1>
                                            <h1>07234567569</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='flex gap-4 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border border-red-500 rounded-full bg-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <div>
                                            <h1>youremail@gmail.com</h1>
                                            <h1>youremail@gmail.com</h1>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-y border-gray-300 my-2'>
                        <div className='p-5'>
                            <h1>
                                Fountain.com&copy; {formatDate} Allright are Reserved
                            </h1>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
