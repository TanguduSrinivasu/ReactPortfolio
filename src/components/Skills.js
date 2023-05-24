import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] h-screen w-full text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-4xl inline font-bold border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>These are the Technologies I've worked with</p>
            </div>

            <div className='w-full text-center grid grid-cols-2 sm:grid-cols-3 gap-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={html} alt="HTML Icon"/>
                   <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={css} alt="CSS Icon"/>
                   <p className='py-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={javascript} alt="Javascript Icon"/>
                   <p className='py-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={react} alt="CSS Icon"/>
                   <p className='py-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={tailwind} alt="CSS Icon"/>
                   <p className='py-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={github} alt="CSS Icon"/>
                   <p className='py-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills