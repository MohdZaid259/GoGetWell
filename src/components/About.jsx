import React from 'react'
import About from '../assets/about.gif'

function AboutPage() {
  return (
    <div className='flex justify-center items-center lg:flex-row flex-col py-12 lg:px-10 px-4'>
      <div className='lg:w-1/2 flex justify-center items-center'>
        <img className='w-96 ' src={About} alt="aboutgif" />
      </div>

      <div className='lg:w-1/2 w-full'>
        <h1 className='text-3xl font-bold'>About Us</h1>
        <div class="h-1 w-20 bg-purple-900 opacity-80 rounded-full mt-2 mb-4"></div>

        <span className='text-gray-800 text-sm inline-block lg:w-[80%]'>We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.</span>
        <span className='mt-4 mb-4 text-gray-800 text-sm inline-block lg:w-[90%]'>Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.</span>

        <div className='flex justify-start lg:gap-24 gap-2 items-center flex-wrap lg:w-[80%]'>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-md bg-blue-100 max-w-max mr-4'>
              <svg class="w-6 h-6 text-primary" fill="none" stroke='#63559A' viewBox="0 0 24 24"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xl font-semibold'>Modern Solutions</span>
              <span className='text-sm text-gray-800'>Leveraging AI technology for <br/> healthcare</span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-md bg-blue-100 max-w-max mr-4'>
              <svg class="w-6 h-6 text-primary" fill="none" stroke='#63559A' viewBox="0 0 24 24"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xl font-semibold'>Patient-Centric</span>
              <span className='text-sm text-gray-800'>Personalized healthcare <br/> experiences</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage