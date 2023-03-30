import React from 'react';
import realestate from '../assets/realestate.jpg';
import workImg from '../assets/workImg.jpeg';

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] md:h-screen w-full text-gray-300'>
      {/* If the width is greater than 768px then height should be 100vh */}

      <div className='max-w-[1000px] mx-auto p-4 flex  flex-col justify-center w-full h-full'>
        <div className='pb-3 pt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='pt-4'>// Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* grid items */}
          <div style={{backgroundImage : `url(${realestate})`}} 
          className='group shadow-lg shadow-[#040c16] w-full rounded-lg flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white  tracking-wider'>
                ReactJS Application
              </p>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Demo</button>
                </a>

                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* grid items */}
          <div style={{backgroundImage : `url(${workImg})`}} 
          className='group shadow-lg shadow-[#040c16] w-full rounded-lg flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white  tracking-wider'>
                ReactJS Application
              </p>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Demo</button>
                </a>

                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* grid items */}
          <div style={{backgroundImage : `url(${realestate})`}} 
          className='group shadow-lg shadow-[#040c16] w-full rounded-lg flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white  tracking-wider'>
                ReactJS Application
              </p>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Demo</button>
                </a>

                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>



          {/* grid items */}
          <div style={{backgroundImage : `url(${workImg})`}} 
          className='group shadow-lg shadow-[#040c16] w-full rounded-lg flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white  tracking-wider'>
                ReactJS Application
              </p>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Demo</button>
                </a>

                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>


          {/* grid items */}
          <div style={{backgroundImage : `url(${realestate})`}} 
          className='group shadow-lg shadow-[#040c16] w-full rounded-lg flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white  tracking-wider'>
                ReactJS Application
              </p>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Demo</button>
                </a>

                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>



          {/* grid items */}
          <div style={{backgroundImage : `url(${workImg})`}} 
          className='group shadow-lg shadow-[#040c16] w-full rounded-lg flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white  tracking-wider'>
                ReactJS Application
              </p>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Demo</button>
                </a>

                <a href='/'>
                  <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>

    </div>
  )
}

export default Work