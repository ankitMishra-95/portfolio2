import React from 'react'
import TopInfo from './TopInfo'
import TopImage from './TopImage'
import TopStack from './TopStack'

const TopSection = () => {
  return (
    <section className='h-fit flex items-center justify-evenly w-3/4 mx-auto relative py-32'>
        <TopInfo />
        <TopImage />
        <TopStack />
      </section>
  )
}

export default TopSection