import React from 'react'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Login() {
    return (
        <div>
            <Navigation />
            <section className='flex flex-wrap justify-center  my-9 container mx-auto'>
                <form action="" className='bg-gray-400 p-9 mb-5 mx-2 rounded-xl shadow-md shadow-white space-y-1 w-[300px] md:w-[450px] md:h-[450px]'>
                    <h1 className='py-2 text-3xl font-semibold'>
                        Already a member?Log in here
                    </h1>
                    <label htmlFor="email">
                        Your Email:
                    </label> <br />
                    <input type="email" name='email' id='email' placeholder='Fountain@.email.com' required className='md:w-80 rounded-lg p-2' /> <br /><br />
                    <label htmlFor="password">
                        Password:
                    </label> <br />
                    <input type="password" name='password' id='password' placeholder='......' required className='md:w-80 rounded-lg p-2' /> <br />
                    <Link href='#' className='text-blue-600 px-1 '>
                        Forgot your password?
                    </Link><br /><br />

                    <input type="checkbox" name='keep-updated' id='keep-updated' />
                    <label htmlFor="keep-updated" className='px-2'>
                        Remember me
                    </label>

                    <div className='mt-2 py-2'>
                        <button type='submit' className='p-2 px-4 bg-blue-500 rounded-md text-white font-semibold'>Log In</button>
                    </div>
                </form>
                <div className='bg-gray-400 p-9 mx-2  rounded-xl shadow-md shadow-white space-y-1 w-[300px] md:w-[450px]'>
                    <div className='space-y-2 pb-5 w-full'>
                        <h1 className='py-2 text-3xl font-semibold'>
                            Join Fountain and start applying for auditions
                        </h1>
                        <p>Take your acting or singing or voiceover to the next level</p>
                        <ul>
                            <li className='flex items-center space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>
                                    Access & apply to thousands of up-to-the-minute casting notices!
                                </p>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>
                                    Learn how to hone your craft.
                                </p>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>
                                    Access our proprietary database of agents and casting directors.
                                </p>
                            </li>
                        </ul>

                        <button type='submit' className='p-2 px-4 bg-blue-500 rounded-md text-white font-semibold'>Join Start Now</button>
                    </div>
                    <div className='py-2 border-t space-y-2 pb-5 w-full'>
                        <h1 className='py-2 text-3xl font-semibold'>
                            Find Talent
                        </h1>
                        <p>Casting directors, producers, employers, filmmakers, and theater-makers</p>
                        <ul>
                            <li className='flex items-center space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>
                                    Post casting notices. Promote your auditions.
                                </p>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>
                                    Search the Talent Database. Find cast, crew, and voiceover artists.
                                </p>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>
                                    Manage submissions and contact talent.
                                </p>
                            </li>
                        </ul>

                        <button type='submit' className='p-2 px-4 bg-blue-500 rounded-md text-white font-semibold'>Post a Job</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
