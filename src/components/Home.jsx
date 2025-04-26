import React, { useState } from 'react'
import Nav from './Nav'
import Modal from './ui/modal.jsx'

function home() {
  const [status,setStatus]=useState(false)

  return (
    <div className={`bg-[#01052F] w-screen h-screen `}>
      <Nav props={setStatus}/>

      {status && <div className='w-screen h-screen absolute inset-0 bg-black/60 backdrop-blur-xs'></div>}

      <div className='flex flex-col text-white p-4 mt-36'>
        <span className='text-[#63559A] font-semibold text-2xl lg:text-4xl'>AI Front Office</span>
        <span className='text-white font-bold text-2xl lg:text-4xl'>For Healthcare Agents</span>

        {status && <Modal props={setStatus}/>}

        <span className='lg:mt-8 mt-4 text-lg inline'>Create <p className='text-[#63559A] inline font-semibold'>AI Store</p> in 2 min</span>
        <span className='mb-6 text-lg inline'>Scale with <p className='text-[#63559A] inline font-semibold'>Digital Marketing</p></span>

        <button onClick={()=>setStatus(true)} className='rounded-md bg-[#63559A] text-white max-w-max px-14 py-3 font-semibold cursor-pointer'>Get Started</button>

        <div className='flex justify-start items-center gap-8 mt-8 flex-wrap'>
          <div className='flex flex-col'>
            <span className='font-semibold text-4xl'>2100<p className='text-[#63559A] text-4xl inline font-semibold'>+</p></span>
            <span className='text-lg '>Qualified Doctors</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold text-4xl'>1000<p className='text-[#63559A] text-4xl inline font-semibold'>+</p></span>
            <span className='text-lg '>Hospitals</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold text-4xl'>800<p className='text-[#63559A] text-4xl inline font-semibold'>+</p></span>
            <span className='text-lg '>Treatment Plans</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home