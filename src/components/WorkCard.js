import React from 'react'
import { Link } from 'react-router-dom'

const WorkCard = ({company}) => {
    const {id, name, image, redirection, description} = company;
    let rev = "flex";
    if(Number(id) > 3 && !window.location.href.includes("work")) return;
    if(Number(id) % 2 === 0) {rev = "flex-row-reverse"}

  return (
    <div className={`bg-slate-50 shadow-xl rounded-2xl mb-16 flex ${rev} justify-center items-start gap-10 py-5 md:py-20 md:px-10 px-2 flex-col md:flex-row`}>
        <div className="w-full md:w-2/4 rounded-2xl h-[20rem] overflow-hidden">
        <img src={image} alt="name" className='rounded-2xl transition-all duration-[10s] hover:-translate-y-[50%]' />
        </div>
        <div className='w-full md:w-2/4'>
            <h3 className='text-4xl font-semibold'>{name}</h3>
            <p className='mt-8 mb-10 text-slate-900'>{description}</p>
            <Link to={redirection} className='font-bold border border-slate-400 px-6 rounded-lg py-2'>Live Demo ↗️ </Link>
        </div>
    </div>
  )
}

export default WorkCard