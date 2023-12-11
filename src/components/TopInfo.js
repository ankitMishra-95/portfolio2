import React from 'react';
import linkedin from "../assets/images/linkedin.png";
import gitHub from "../assets/images/github.png"
import { Link } from 'react-router-dom';

const TopInfo = () => {
  return (
    <div  className='w-2/4'>
        <h1 className='text-6xl font-bold text-neutral-900'>Front-End React <br></br> Developer, 👋🏻 </h1>
        <p className='text-black font-light mt-8 mb-16'>Hi, I am Ankit Mishra A passionate front-end <br></br> React Dev Based in New Delhi, India.</p>
        <p className=' flex'>Lets Connect : 
          <span className='mr-2 ml-4'>
            <Link to={"https://in.linkedin.com/in/ankitmishra-95"}> <img src={linkedin} alt='Linkedin' className='w-6' /></Link></span>
          <span><Link to={'https://github.com/ankitMishra-95'}><img src={gitHub} alt='Github' className='w-6' /></Link></span>
          
        </p>
    </div>
  )
}

export default TopInfo