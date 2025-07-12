import React from 'react'
import { cover } from 'three/src/extras/TextureUtils.js'

const parallaxbg = () => {
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                 backgroundImage: "url('/codingbg.png')",
                 backgroundSize:"cover",
            }}/>
        </div>
    </section>
  )
}

export default parallaxbg