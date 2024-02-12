import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>

        <form action='https://getform.io/f/bb8dfb8c-46a8-4189-a094-44c6ad497b42' method='POST' className='flex flex-col max-w-[600px] w-full'>

            <div className='pb-8 pt-16 text-gray-300'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-4'>Submit the below form or Shoot me an email to srinivasu.tangudu56@gmail.com</p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' required/>
            <input className='bg-[#ccd6f6] p-2 my-4' type='email' placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' rows='10' name='message' required/>
            <button className='text-white border-2 px-4 py-3 hover:border-pink-600 hover:bg-pink-600 mx-auto my-8 flex items-center'>Let's Collabrate</button>
        </form>
        
    </div>
  )
}

export default Contact