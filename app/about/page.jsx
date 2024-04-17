import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function About() {
  return (
    <div>
      <Navigation />
      <div className='container mx-auto mt-2'>
        <div className='space-x-2 text-2xl font-semibold'>
          <span>
            Welcome to our
          </span>
          <span>
            Fountain
          </span>
        </div>

        {/* description on fountain */}
        <div className='space-y-4 my-5'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi earum ullam ea deserunt autem beatae optio atque nobis totam, ducimus ab repellendus nemo similique necessitatibus quod eveniet! Atque, rem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit libero earum quidem quibusdam ipsum nobis eligendi velit nam eius veniam, ullam corporis ducimus officiis vero labore eaque fugit ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem laborum atque modi? Laudantium molestias totam adipisci quo eligendi asperiores officiis nesciunt corporis ullam consequuntur, quas minus repudiandae maxime eum.
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, laborum. Accusamus, est maiores molestias, corporis fugiat velit repellat ducimus eveniet illo saepe, culpa amet omnis quod debitis? Sint, nisi vel?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique modi nam optio adipisci ex blanditiis inventore maiores aliquid molestiae maxime natus cum voluptates est, eveniet at tempore itaque numquam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolores repellendus numquam? Ipsa earum officiis error aperiam ea eos, culpa quam dicta optio qui officia harum recusandae vitae tempore alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum deleniti autem non sit debitis doloremque assumenda veritatis asperiores, vel, tempore consequatur, ut adipisci quam. Beatae quasi repellat architecto debitis.
          </div>
        </div>

        {/* management team  */}

        <div>

        </div>

      </div>
      
      <Footer />
    </div>
  )
}
