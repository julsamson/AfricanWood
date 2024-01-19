import React from 'react'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Footer from '../components/footer'




export default function Registration() {
  return (
    <div>
      <Navigation />
      <section>
        <div className=''>
          <form action="post" className='flex flex-wrap md:flex-col justify-center  my-9 container mx-auto overflow-hidden'>
            <div className='w-[300px] min-[425px]:w-[400px] md:w-full md:flex md:space-x-5 md:justify-center'>
              <div>
                <label htmlFor="user" className=''>
                  UserName*
                </label><br />
                <input type="text" name='user' id='user' placeholder='Your Username' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />
                <label htmlFor="fname">
                  First Name*
                </label><br />
                <input type="text" name='fname' id='fname' placeholder='john' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />
                <label htmlFor="lname">
                  Last Name*
                </label><br />
                <input type="text" name='lname' id='lname' placeholder='Doe' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />
              </div>
              <div>
                <label htmlFor="email">
                  Email*
                </label><br />
                <input type="email" name='email' id='email' placeholder='example@.com' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />
                <label htmlFor="fname">
                  Password*
                </label><br />
                <input type="password" name='pswd' id='pswd' placeholder='' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />
                <label htmlFor="lname">
                  Confirm Password*
                </label><br />
                <input type="password" name='cpswd' id='cpswd' placeholder='confirm password' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />
              </div>
            </div>
            <div className='w-[300px] min-[425px]:w-[400px] container mx-auto md:w-[670px]'>
              <div className='flex'>
                <label htmlFor="about-you">
                  About You
                </label>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </span><br /><br />
              </div>
              <div>
                <textarea name="description" id="" cols="25" rows="10" className='rounded-lg min-[425px]:w-80 md:w-full p-2 my-2'></textarea>
              </div><br /><br />
            </div>
            <div className='w-[300px] min-[425px]:w-[400px] md:w-[670px] container mx-auto'>
              <label htmlFor="category">
                Talent Categories
              </label><br />
              <input type="text" name='category' id='category' placeholder='' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />

              <div className='' >
                <h1 className='pb-3'>Gender</h1>
                <input type="radio" name='gender' id='male' placeholder='' required className='' value='Male' />
                <label htmlFor="male" className='px-2 pr-4'>Male</label>
                <input type="radio" name='gender' id='female' placeholder='' required className='' value='Female' />
                <label htmlFor="female" className='px-2 pr-4'>Female</label>
              </div>

              <div className='py-4'>
                <label htmlFor="country" className=''>
                  Country
                </label><br />
                <input type="text" name='country' id='country' placeholder='choose a country' required className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />

                <label htmlFor="lang">
                  Language Spoken
                </label><br />
                <input type="text" name='lang' id='lang' placeholder='select language' className='w-70 min-[425px]:w-80 rounded-lg p-2 my-2' /> <br /><br />

                <Link href='#' className='py-5'>
                  show privacy policy
                </Link><br />
                <input type="checkbox" name='policy' id='policy' required className='m-2' />
                Please confirm that you have agreed to our privacy policy
              </div>
            </div>

            <div className='w-[300px] min-[425px]:w-[400px] md:w-[670px] container mx-auto'>
              <button type='submit' className='px-14 py-2 bg-red-400 rounded-lg'>Register</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
