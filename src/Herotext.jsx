import React from 'react'
import { FlipWords } from './flipwords'
import { motion } from 'motion/react'

const Herotext = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-20 md:text-left rounded-3xl bg-clip-text'>

      {/* Desktop View */}
      <div className='flex-col hidden md:flex c-space space-y-4'>
        <motion.h1
            style={{ fontFamily: 'Montserrat' }}
          className='text-5xl font-medium'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: -60 }}
          transition={{ delay: 1 }}
        >
        Hi, Shweta here!
        </motion.h1>

        <motion.p
        style={{ fontFamily: 'Montserrat' }}
          className='text-6xl font-medium text-neutral-300'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          Caffeine? Always.<br></br>  
            Code? Clean.<br></br>
            I build        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <FlipWords
          style={{ fontFamily: 'Montserrat' }}
              words={["Elegant", "Scalable", "Reliable"]}

            className="text-8xl font-extrabold text-white"
          />
        </motion.div>

        <motion.p
        style={{ fontFamily: 'Montserrat' }}
          className='text-5xl font-medium text-neutral-300'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          Web Applications
        </motion.p>
      </div>

      {/* Mobile View */}
      <div className='flex flex-col space-y-6 md:hidden c-space'>
        <motion.p
        style={{ fontFamily: 'Montserrat' }}
          className='text-4xl font-medium'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Hi,Shweta here!
        </motion.p>

        <motion.p
        style={{ fontFamily: 'Montserrat' }}
          className='text-5xl font-black text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Caffeine? Always.<br></br>  
            Code? Clean.<br></br>
            I build
        </motion.p>

        <motion.div
        style={{ fontFamily: 'Montserrat' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <FlipWords
             words={["Elegant", "Scalable", "Reliable"]}
            className="text-7xl font-extrabold text-white"
          />
        </motion.div>

        <motion.p
        style={{ fontFamily: 'Montserrat' }}
          className='text-4xl font-black text-neutral-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          Web Applications
        </motion.p>
      </div>
    </div>
  )
}

export default Herotext
