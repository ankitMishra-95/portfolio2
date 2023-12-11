import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from "../../assets/images/linkedin.png";
import gitHub from "../../assets/images/github.png"

const Footer = () => {
  return (
    <section className='bg-black'>
        <div className='px-12 py-6 flex justify-between items-center'>
            <p className='text-slate-50'>Copyright © 2023. All rights are reserved</p>
            <p className=" flex text-slate-50">Lets Connect :<span className='mr-2 ml-4'>
            <Link to={"https://in.linkedin.com/in/ankitmishra-95"}> <img src={linkedin} alt='Linkedin' className='w-6' /></Link></span>
          <span><Link to={'https://github.com/ankitMishra-95'}><img src={gitHub} alt='Github' className='w-6 bg-slate-50 p-1 rounded' /></Link></span></p>
        </div>
    </section>
  )
}

export default Footer