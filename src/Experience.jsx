import React from 'react'
import {Timeline }from './Timeline';
import { experiences } from '.';
const Experience = () => {
    
    return (
    <div id="journey"className='w-full'><Timeline data={experiences}/>
    </div>
    
  )
}

export default Experience