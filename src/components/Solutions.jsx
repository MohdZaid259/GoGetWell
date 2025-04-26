import React from 'react'

function Solutions() {
  return (
    <div className='p-4 mt-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-center'>Our Comprehensive Solutions</h1>
        <div class="h-1 w-20 bg-purple-900 opacity-80 rounded-full mt-4 mb-8"></div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-3 md:px-24 gap-8 mb-12'> 
        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-blue-400 p-4 py-6'>
          <div class="bg-blue-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 18.791V20H9v2h6v-2h-2v-1.845a9.934 9.934 0 0 0 3.071-2.084c3.898-3.898 3.898-10.243 0-14.143l-1.414 1.414c3.119 3.12 3.119 8.195 0 11.314-3.119 3.118-8.195 3.12-11.314 0L1.929 16.07A9.971 9.971 0 0 0 9 18.994a9.98 9.98 0 0 0 2-.203z"></path><path d="M3 9c0 3.309 2.691 6 6 6s6-2.691 6-6-2.691-6-6-6-6 2.691-6 6zm10 0c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4z"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Custom AI-Powered Website</span>
          <span className='text-gray-900 '>Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-purple-400 p-4'>
          <div class="bg-purple-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Enhanced Patient Conversion</span>
          <span className='text-gray-900 '>Smart conversion optimization tools to turn visitors into patients with personalized experiences.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-green-400 p-4'>
          <div class="bg-green-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Real-Time Query Handling</span>
          <span className='text-gray-900 '>Instant response system for patient inquiries with AI-powered chat support.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-orange-400 p-4'>
          <div class="bg-orange-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="none" strokewidth="2" viewBox="0 0 24 24" strokelinecap="round" strokelinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
          <span className='block font-semibold text-xl mb-3'>Medical Report Analysis</span>
          <span className='text-gray-900 '>Advanced AI analysis of medical reports for quick and accurate patient assessments.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-pink-400 p-4'>
          <div class="bg-pink-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Improved Lead Generation</span>
          <span className='text-gray-900 '>Data-driven lead generation strategies to attract and engage potential patients.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-indigo-400 p-4'>
          <div class="bg-indigo-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Comprehensive Healthcare <br/> Database</span>
          <span className='text-gray-900 '>Extensive medical information database for accurate patient guidance and support.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-red-400 p-4'>
          <div class="bg-red-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="none" strokewidth="2" viewBox="0 0 24 24" strokelinecap="round" strokelinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Multilingual Support</span>
          <span className='text-gray-900 '>Breaking language barriers with comprehensive multilingual communication tools.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-teal-400 p-4'>
          <div class="bg-teal-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path><path d="M6 14h6v2H6z"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Seamless Payment Handling</span>
          <span className='text-gray-900 '>Secure and efficient payment processing for medical services globally.</span>
        </div>

        <div className='shadow-xl hover:scale-105 duration-200 rounded-lg border-b-4 border-cyan-400 p-4'>
          <div class="bg-cyan-500 inline-flex p-3 rounded-lg text-white mb-4"><svg stroke="currentColor" fill="currentColor" strokewidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></div>
          <span className='block font-semibold text-xl mb-3'>Marketing And SEO Support</span>
          <span className='text-gray-900 '>Optimized digital presence with advanced SEO and marketing strategies.</span>
        </div>
      </div>
    </div>
  )
}

export default Solutions