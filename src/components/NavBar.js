import React, { useState } from 'react';
// import logo from '../assets/logo.jpg';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    console.log(nav);

  return (
    <div className='fixed w-full h-[80px] px-4 bg-[#0a192f] text-gray-300 flex items-center justify-between'>
        <h2 className='font-bold text-2xl'>{`<Srinivasu>`}</h2>

    <ul className='hidden md:flex font-bold'>  
    {/* if the width of the website is above 768px(medium) then flex will be applied or else it will be hidden */}
        <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
    </ul>

    {/* handburgermenu */}
    <div className='md:hidden z-10 cursor-pointer' onClick={handleClick}>
    {/* if the width of the website is above 768px(medium) then it will be hidden */} 
       {nav===false ? <FaBars/> : <FaTimes/>} 
    </div>


    {/* MobileViewMenu */}
    <ul className={nav===false ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#0a192f] h-screen flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link> 
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
          Contact
        </Link>  
        </li>
    </ul>


    {/* SocialIcons */}
    <ul className='hidden lg:flex flex-col fixed top-[35%] left-0 '>
         {/* if the width of the website is above 1024px(medium) then it will be shown */} 
        <li className='w-[160px] h-[60px] bg-blue-600 ml-[-100px] hover:ml-[0px] duration-500'>
            <a href='https://www.linkedin.com/in/tangudu-srinivasu-779563147/' target='_blank' rel="noopener noreferrer" className='flex justify-between items-center mt-[15px]'>
                LinkedIn<FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] bg-[#333333] ml-[-100px] hover:ml-[0px] duration-500'>
            <a href='https://github.com/TanguduSrinivasu' target='_blank' rel="noopener noreferrer" className='flex justify-between items-center mt-[15px]'>
                Github<FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] bg-[#6fc2b0] ml-[-100px] hover:ml-[0px] duration-500'>
            <a href = "mailto: srinivasu.tangudu56@gmail.com" target='_blank' rel="noopener noreferrer" className='flex justify-between items-center mt-[15px]'>
                Email<HiOutlineMail size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-[0px] duration-500'>
            <a href='https://drive.google.com/file/d/1u-GyrraHpRcbDjAGjeggOZ7nCLs943bc/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className='flex justify-between items-center mt-[15px]'>
                Resume<BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </ul>


    </div>
  )
}

export default NavBar