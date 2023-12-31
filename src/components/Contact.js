import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className=' pt-10 pb-5 md:pb-28 w-[98%] md:w-[55%] mx-auto relative'>
    <div className='h-fit flex items-center justify-evenly w-full md:w-3/4 mx-auto'>
    <div className='mb-20 h-28'>
        <h2 className=' text-6xl md:text-9xl font-black uppercase tracking-widest text-slate-50 absolute left-0 md:-left-[40%] top-0 w-screen mt-10 md:mt-0'>
        <div className="marquee">
            <div className="track">
                <div className="content">&nbsp;Lets Connect Lets Connect Lets Connect Lets Connect Lets Connect   </div>
            </div>
        </div>

        </h2>
        </div>
    </div>
        <div className='bg-slate-50 w-[100%] mx-auto mb-16 py-5 px-2 md:py-20 md:px-10 rounded-2xl  -mt-20 md:mt-0'>
          <h6 className='text-blue-700 font-semibold uppercase'>
          Contact
          </h6>
          <h3 className='mt-8 mb-5 text-2xl font-semibold'> 🚀 Cheers to creating engaging and memorable online experiences!</h3>
          <p className='mb-3 font-medium'> Let's connect! I'm always open to discussing exciting opportunities</p>
          <p className='mb-3'>📧 Email: <Link className='text-blue-700' to={"mailto:dezinerankit@gmail.com"}>dezinerankit@gmail.com</Link> </p>
          <p className='mb-3'>📍 Location: New Delhi, India </p>
        </div>
    </section>
  )
}

export default Contact