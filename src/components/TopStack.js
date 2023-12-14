import React from 'react'
import PaperPlane from '../assets/images/aeroplane.png'
import HtmlCss from '../assets/images/Html-css.svg'
import jsTs from '../assets/images/js-ts.svg'
import reactNext from '../assets/images/react-next.svg'
import TailwindSass from '../assets/images/tailwind-sass.svg'

const TopStack = () => {
  return (
    <div className='w-full md:w-2/4 flex flex-col justify-center items-end mr-0 md:mr-44 '>
        <div className='flex flex-col justify-center items-center w-full md:w-auto'>
        <img className='w-20 mb-5 md:mb-10' src={PaperPlane} alt='plane' />
        <p className='mb-6 text-2xl font-thin tracking-widest'>Tech Stack</p>
        <div className='flex justify-center items-center w-full gap-2 md:block text-center'>
        <img className='mb-10 w-16 mx-auto transition-all hover:-translate-y-1' src={HtmlCss} alt='Html & CSS' />
        <img className='mb-10 w-16 mx-auto transition-all hover:-translate-y-1' src={jsTs} alt='javascript and Typescript' />
        <img className='mb-10 w-16 mx-auto transition-all hover:-translate-y-1' src={reactNext} alt='React js and Next js' />
        <img className='mb-10 w-16 mx-auto transition-all hover:-translate-y-1' src={TailwindSass} alt='Tailwind and Sass' /></div>
        </div>
    </div>
  )
}

export default TopStack