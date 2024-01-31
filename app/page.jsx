import React from 'react'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <Navigation />
      <section className='container mx-auto my-3'>
        <div>
          <div>
          <p className='pb-4'>
            Home page
          </p>
          </div>
          <div className='w-[600px] rounded-3xl h-96 bg-white text-black flex justify-center items-center'>
             <div>
              The News
             </div>
          </div>
        </div>
        <div className='my-4'>
          <div className=''>
            <Link href='#' className=''>
              <h1 className='button text-black bg-white w-40 flex justify-center p-7 rounded-3xl my-2'>
                Musicians
              </h1>
            </Link>
            <Link href='#' className=''>
              <h1 className='button text-black bg-white w-40 flex justify-center p-7 rounded-3xl my-2'>
                Producers
              </h1>
            </Link>
            <Link href='#' className=''>
              <h1 className='button text-black bg-white w-40 flex justify-center p-7 rounded-3xl my-2'>
                Dancers
              </h1>
            </Link>
            <Link href='#' className=''>
              <h1 className='button text-black bg-white w-40 flex justify-center p-7 rounded-3xl my-2'>
                Models
              </h1>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
