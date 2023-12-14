import React from 'react'
import WorkCard from './WorkCard'
import { WORK_PROJECTS } from '../utils/constants'

const Work = () => {
  return (
    <section className=' pt-10 pb-28 w-[98%] md:w-[55%] mx-auto relative'>
    <div className='h-fit flex items-center justify-evenly w-[100%] md:w-3/4 mx-auto  -mb-20 md:mb-0'>
    <div className='mb-20 h-28'>
        <h2 className='text-6xl  md:text-9xl font-black uppercase tracking-widest text-slate-50 absolute -left-[0%] md:-left-[40%] top-0 w-screen mt-10 md:mt-0'>
        <div className="marquee">
            <div className="track">
                <div className="content">&nbsp;WORK WORK WORK WORK WORK WORK WORK  </div>
            </div>
        </div>

        </h2>
        {/* <h2 className='text-9xl font-black uppercase tracking-widest text-slate-100 absolute top-4 left-3 -z-10'>My WORK</h2> */}
        </div>
    </div>
    {WORK_PROJECTS.map((org) => <WorkCard key={org.id} company={org} />)}
       
    </section>

  )
}

export default Work