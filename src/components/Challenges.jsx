import React from 'react'
import Challenge from '../assets/challenge.gif'

function ChallengesPage() {
  return (
    <div className='flex justify-center items-center lg:flex-row flex-col py-12 lg:py-24 lg:px-10 px-4'>
      <div className='lg:w-1/2 flex justify-center items-center'>
        <img className='w-96' src={Challenge} alt="aboutgif" />
      </div>

      <div className='lg:w-1/2 w-full'>
        <h1 className='text-3xl font-bold'>The Challenges We Solve</h1>
        <div class="h-1 w-20 bg-purple-900 opacity-80 rounded-full mt-2 mb-4"></div>

        <span className='text-gray-800 text-sm inline-block lg:w-[80%]'>Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.</span>
        <span className='mt-4 mb-4 text-gray-800 text-sm inline-block lg:w-[90%]'>Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.</span>

        <div className='flex justify-start lg:gap-24 gap-2 items-center flex-wrap lg:w-[80%]'>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-md bg-blue-100 max-w-max mr-4'>
              <svg class="w-6 h-6 text-primary" fill="none" stroke='#63559A' viewBox="0 0 24 24"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xl font-semibold'>Efficient Operations</span>
              <span className='text-sm text-gray-800'>Streamlined booking and <br/> management</span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-md bg-blue-100 max-w-max mr-4'>
              <svg class="w-6 h-6 text-primary" fill="none" stroke='#63559A' viewBox="0 0 24 24"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xl font-semibold'>Enhanced Support</span>
              <span className='text-sm text-gray-800'>Improved patient communication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengesPage