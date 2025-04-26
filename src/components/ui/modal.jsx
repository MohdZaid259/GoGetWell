import React from 'react'

function Modal({props}) {

  return (
    <div className='absolute left-1/2 transform -translate-x-1/2 top-14 px-6 py-4 rounded-md flex flex-col w-1/3 bg-white justify-center items-center gap-2'>
      <h1 className='text-center font-semibold text-black text-xl'>Join Wait List to Get Started</h1>
      <span onClick={()=>props(false)} className='cursor-pointer absolute text-gray-700 top-4 right-4'>X</span>
      <button className='rounded-md bg-[#63559A] text-white w-full py-2 '>Continue as HCF</button>
      <button className='rounded-md border border-[#63559A] text-[#63559A] w-full py-2 '>Continue as Hospital</button>
    </div>
  )
}

export default Modal