import React from 'react'
import { Link } from 'react-router-dom'

const WorkCard = ({company}) => {
    const {id, image, redirection, description, organisation} = company;
    let rev = "flex";
    if(Number(id) > 3 && !window.location.href.includes("work")) return;
    if(Number(id) % 2 === 0) {rev = "flex-row-reverse"}

  return (
    <div className={`bg-slate-50 shadow-xl rounded-2xl mb-16 flex ${rev} justify-center items-start gap-10 p-10 transition hover:-translate-y-4`}>
        <div className="w-2/4 rounded-2xl h-[20rem] overflow-hidden">
        <img src={image} alt="name" className='rounded-2xl' />
        </div>
        <div className='w-2/4'>
            <h3 className='text-4xl font-semibold'>{organisation}</h3>
            <p className='mt-6 mb-8 text-slate-900'>{description}</p>
            <Link to={redirection} className='font-bold border border-slate-400 px-6 rounded-lg py-2'>Live Demo ↗️ </Link>
        </div>
    </div>
  )
}

export default WorkCard