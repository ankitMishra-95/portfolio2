import React from 'react'

const About = () => {
  return (
    <section className=' pt-10 pb-28 w-[55%] mx-auto relative'>
    <div className='h-fit flex items-center justify-evenly w-3/4 mx-auto'>
    <div className='mb-20 h-28'>
        <h2 className='text-9xl font-black uppercase tracking-widest text-slate-50 absolute -left-[40%] top-0 w-screen'>
        <div className="marquee">
            <div className="track">
                <div className="content">&nbsp;ABOUT ME ABOUT ME ABOUT ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME  </div>
            </div>
        </div>

        </h2>
        </div>
    </div>
        <div className='bg-slate-50 w-[100%] mx-auto mb-16 p-10 rounded-2xl'>
          <h6 className='text-blue-700 font-semibold uppercase'>
          About Me
          </h6>
          <h3 className='mt-8 mb-2 text-2xl font-semibold'>Front-End Developer | Web Enthusiast | Innovator</h3>
          <p className='mb-6'>Greetings! 👋 I'm <span className='font-semibold'>Ankit Mishra</span>, a seasoned Front-End Developer with a passion for crafting exceptional digital experiences. With over 5 years of hands-on experience, I specialize in leveraging the power of Next.js, React, and JavaScript to build dynamic and user-friendly web applications.</p>
          <p className='leading-9'><span className='font-semibold'>🛠️ What I bring to the table:</span><br></br>
            ✨ Expertise in creating robust and responsive interfaces<br></br>
            ✨ Proficiency in modern web development technologies and frameworks<br></br>
            ✨ Extensive experience in translating design concepts into seamless, high-performance applications<br></br>
            ✨ Commitment to staying on the cutting edge of industry trends<br></br>
            ✨ Strong problem-solving skills with a focus on code quality and maintainability</p>
        </div>
    </section>
  )
}

export default About