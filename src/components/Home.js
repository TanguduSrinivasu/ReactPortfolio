import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] h-screen w-full'>

        {/* container */}
        <div className='flex flex-col h-full justify-center px-8 max-w-[1000px] mx-auto'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tangudu Srinivasu</h1>
            {/* if the window size is more than 640px then text size should be 7xl else itext size is 4xl */}
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[500px]'>I'm a FrontEnd Developer Specialized in building responsive Web Applications</p>
            
        <div>
        <Link to="work" smooth={true} duration={1000}>
            <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300 ml-2'>
            <HiArrowNarrowRight/>
            </span>
            </button>
        </Link>
        </div>
        </div>

    </div>
  )
}

export default Home