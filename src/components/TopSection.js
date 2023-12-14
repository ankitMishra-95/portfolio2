import React from 'react'
import TopInfo from './TopInfo'
import TopImage from './TopImage'
import TopStack from './TopStack'

const TopSection = () => {
  return (
    <section className='h-fit flex md:flex-row flex-col items-center justify-evenly w-full md:w-3/4 mx-auto relative py-5 md:py-32 px-5 md:px-0'>
        <TopInfo />
        <TopImage />
        <TopStack />
      </section>
  )
}

export default TopSection