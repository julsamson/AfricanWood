import React from 'react'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Contacts() {
  return (
    <div>
      <Navigation />
      <section className='flex flex-wrap w-screen container mx-auto'>
        <div className='sm:w-[250px] min-[425px]:w-[390px] md:w-full lg:w-[500px] flex flex-col overflow-hidden justify-center px-3'>
          <div>
            <h1 className='pt-2 text-2xl font-semibold'>
              Get In Touch
            </h1>
            <div className='py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod sint aspernatur consequuntur, reiciendis eligendi,
              sed omnis voluptas nulla in fugit pariatur dolor cumque
              facere culpa, dolorem ipsum totam animi? Ipsam?
            </div>
            <form action="" className='space-y-1 mb-2'>
              <label htmlFor="name">
                Your Name:
              </label> <br />
              <input type="text" name='name' id='name' placeholder='Fountain' required className='sm:w-50 min-[425px]:w-80 md:w-[400px] rounded-lg p-2' /> <br /><br />

              <label htmlFor="email">
                Your Email:
              </label> <br />
              <input type="email" name='email' id='email' placeholder='Fountain@.email.com' required className='sm:w-50 min-[425px]:w-80 md:w-[400px] rounded-lg p-2' /> <br /><br />

              <label htmlFor="subject">
                Subject:
              </label> <br />
              <input type="text" name='sujbect' id='subject' placeholder='what your want to about' required className='sm:w-50 min-[425px]:w-80 md:w-[400px] rounded-lg p-2' /> <br /><br />

              <label htmlFor="message">
                Message:
              </label> <br />
              <textarea name="message" id="message" cols="25" rows="10" aria-invalid='false' className='rounded-lg p-2  min-[425px]:w-80 md:w-[400px]'></textarea> <br /><br />

              <input type="submit" value='Send' className='border border-red-500 bg-red-500 p-2 rounded-lg text-xl' />
            </form>
          </div>
        </div>
        <div className='sm:w-[300px] min-[425px]:w-[400px] md:w-full lg:w-[500px] lg:h-[800px] mx-auto flex justify-center items-center px-3 py-3 pb-7 rounded-lg overflow-hidden'>
          <iframe loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Arusha city, Arusha, Tanzania" aria-label="Arusha city, Arusha, Tanzania" className='w-full h-[588px]'></iframe>
        </div>
      </section>
      <Footer />
    </div>
  )
}
