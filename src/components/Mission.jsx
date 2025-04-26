import React from 'react'
import Mission from '../assets/mission.gif'

function MissionPage() {
  return (
    <div className='flex justify-center items-center lg:flex-row flex-col-reverse py-12 px-4 lg:px-10'>
      <div className='lg:flex-1/2 mt-8 lg:mt-8 lg:mx-24'>
        <h1 className='text-3xl font-bold'>Our Mission</h1>
        <div class="h-1 w-20 bg-purple-900 opacity-80 rounded-full mt-2 mb-4"></div>

        <span className='text-gray-800 text-sm inline-block '>Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.</span>
        <span className='mt-4 mb-4 text-gray-800 text-sm inline-block lg:w-[90%]'>We strive to become the leading platform for healthcare tourism management and digital transformation.</span>

        <div className='flex justify-start lg:gap-24 items-center flex-wrap'>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-md bg-blue-100 max-w-max mr-4'>
              <svg class="w-6 h-6 text-primary" fill="none" stroke='#63559A' viewBox="0 0 24 24"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xl font-semibold'>AI-Powered Solutions</span>
              <span className='text-sm text-gray-800'>Optimizing operations with <br/> advanced technology</span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-md bg-blue-100 max-w-max mr-4'>
              <svg class="w-6 h-6 text-primary" fill="none" stroke='#63559A' viewBox="0 0 24 24"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xl font-semibold'>Growth Focus</span>
              <span className='text-sm text-gray-800'>Maximizing revenue and <br/> opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1/2 lg:pr-36 flex justify-center items-center'>
        <img className='w-[450px] rounded-md' src={Mission} alt="aboutgif" />
      </div>
    </div>
  )
}

export default MissionPage