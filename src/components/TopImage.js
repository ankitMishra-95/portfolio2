import React from 'react'
import ProfileImage from '../assets/images/Profile.jpg'

const TopImage = () => {
  return (
    <div className='absolute z-10 left-2/4 flex justify-center items-center -translate-x-2/4 group'>
        <img style={{transform: "skew(-0.04turn, 1deg)"}} src={ProfileImage} alt='Profile' className='w-2/4 grayscale group-hover:grayscale-0 transition' />
    </div>
  )
}

export default TopImage