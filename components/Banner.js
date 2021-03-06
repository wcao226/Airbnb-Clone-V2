import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image 
         src='https://links.papareact.com/0fm'
         layout='fill'
         objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center sm:text-lg'>
            <p>Not sure where to go? Perfect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Flexible</button>
        </div>
    </div>
  )
}

export default Banner