import React from 'react'
import { Link } from 'react-router-dom'
import { NAVS_ELEMTS } from '../../utils/constants'

const Header = () => {

  return (
    <header className='px-12 py-6 shadow-md bg-slate-50'>
      <div className='flex justify-between'>
        <p className='text-2xl font-bold'><Link to={'/'}><span>Ankit.</span> <span>Dev</span></Link></p>
        <nav>
          <ul className='flex gap-10'>
            {NAVS_ELEMTS?.map((elem) =>  {
              return <li key={elem?.name} className='font-medium uppercase'>
              <Link to={elem.redirection}>{elem.name}</Link>
            </li>
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header