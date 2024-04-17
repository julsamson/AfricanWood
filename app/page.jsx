import React from 'react'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <Navigation />
      <section className='container mx-auto my-3'>
        <div className='flex justify-center '>
          {/* <div>
          <p className='pb-4'>
            Home page
          </p>
          </div> */}

          {/* new part page  */}

          <div className='lg:w-[800px] lg:h-[400px] md:w-[600px] w-full h-40 min-[425px]:w-96 min-[425px]:h-60 md:h-96 min-[425px]:rounded-3xl bg-white text-black flex justify-center items-center'>
            <div>
              The News
            </div>
          </div>
        </div>

        {/* categories for talent people got  */}

        <div className='my-4 flex justify-center '>
          <div className='flex lg:gap-x-12 md:gap-x-44 min-[425px]:gap-x-11 ml-4 lg:w-[800px] md:w-[600px] min-[425px]:w-[400px] w-full gap-x-8 flex-wrap'>
            <Link href='#' className=''>
              <h1 className='text-black bg-white min-[425px]:w-40 md:w-52 lg:w-40 flex justify-center min-[425px]:p-7 min-[425px]:rounded-3xl rounded-md my-2 w-40 p-4'>
                Musicians
              </h1>
            </Link>
            <Link href='#' className=''>
              <h1 className='text-black bg-white min-[425px]:w-40 md:w-52 lg:w-40 flex justify-center min-[425px]:p-7 min-[425px]:rounded-3xl rounded-md my-2 w-40 p-4'>
                Producers
              </h1>
            </Link>
            <Link href='#' className=''>
              <h1 className='text-black bg-white min-[425px]:w-40 md:w-52 lg:w-40 flex justify-center min-[425px]:p-7 min-[425px]:rounded-3xl rounded-md my-2 w-40 p-4'>
                Dancers
              </h1>
            </Link>
            <Link href='#' className=''>
              <h1 className='text-black bg-white min-[425px]:w-40 md:w-52 lg:w-40 flex justify-center min-[425px]:p-7 min-[425px]:rounded-3xl rounded-md my-2 w-40 p-4'>
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
