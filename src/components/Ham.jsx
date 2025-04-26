import React from 'react'

function Ham(props) {

  return (
    <div className={`fixed top-0 right-0 bg-white h-screen w-[50%] transform ease-linear transition-transform duration-200 ${props.menu ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='relative'>
      <svg onClick={()=>props.props(false)} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-gray-700 cursor-pointer absolute top-5 right-5 transition-transform duration-200 hover:rotate-90" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
      <ul className='flex flex-col justify-center pt-14 items-start pl-6 gap-4'>
        <span className='hover:translate-x-2 duration-100 text-lg'>👥 About Us</span>
        <span className='hover:translate-x-2 duration-100 text-lg'>🎯 F&Q</span>
        <span className='hover:translate-x-2 duration-100 text-lg'>📞 Contact Us</span>
        <button className='mt-4 w-full py-[10px] rounded-md font-semibold shadow border hover:border-[#63559A] duration-200 text-[#63559A] bg-white'>Login</button>
        <button className='bg-[#63559A] text-white w-full py-[10px] rounded-md font-semibold shadow border border-white duration-200 hover:text-[#63559A] hover:border-[#63559A] hover:bg-white'>Get Started</button>
      </ul>
      </div>
    </div>
  )
}

export default Ham