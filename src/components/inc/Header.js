import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAVS_ELEMTS } from '../../utils/constants'
import PDF from '../../assets/images/Ankit_Mishra_Frontend_Engineer_Resume.pdf'
import NAVICON from "../../assets/images/nav-icon.png"

const Header = () => {

  const [navToggle, setNavToggle] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF;
    link.download = PDF;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setNavToggle(!navToggle)
  }

  return (
    <header className='px-5 py-3 md:px-12 md:py-6 shadow-md bg-slate-50 relative'>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-bold'><Link to={'/'}><span>Ankit.</span> <span>Dev</span></Link></p>
        <nav>
          <button className='block md:hidden' onClick={(() => setNavToggle(!navToggle))}><img className='w-12' src={NAVICON} alt='Nav' /></button>
          <ul className={`gap-10 items-center md:flex ${!navToggle && "hidden"} absolute left-0 px-5 bg-slate-50 w-screen mt-5  z-20 py-10 md:static md:px-0 md:w-auto md:mt-0 md:py-0`}>
            {NAVS_ELEMTS?.map((elem) =>  {
              return <li key={elem?.name} className='font-medium uppercase mb-5 md:mb-0'>
              <Link to={elem.redirection} onClick={()=> setNavToggle(!navToggle)}>{elem.name}</Link>
            </li>
            })}
            <li onClick={handleDownload} className='btn uppercase font-medium border rounded md:px-8 md:py-3 bg-blue-600 text-white cursor-pointer hover:bg-opacity-90 text-center py-2'>Download CV ↗️</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header