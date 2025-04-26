import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Ham from './Ham'

function Nav({props}) {
  const [menu,setMenu] = useState(false)

  return (
    <div className={`flex justify-between items-center p-6 px-4 lg:pr-8 `}>
      <img className='w-40 lg:w-56' src={logo} alt="logo" />
      <div onClick={()=>setMenu(true)} className='block lg:hidden cursor-pointer pr-2'>
        {!menu && <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-white" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>}
      </div>
      <div className='hidden lg:flex items-center justify-center gap-8 font-medium text-sm text-gray-300'>
        <a href='#about' className='hover:text-purple-800 duration-300'>About Us</a>
        <a href='#faq' className='hover:text-purple-800 duration-300'>F&Q</a>
        <a href='#contact' className='hover:text-purple-800 duration-300'>Contact Us</a>
      </div>
      <div className='hidden lg:flex justify-center items-center gap-4'>
        <a className='cursor-pointer' href="https://in.gogetwell.ai/store" target='_blank'><button className='rounded-md bg-white text-black px-4 py-3 font-semibold'>Login</button></a>
        <button onClick={()=>props(true)} className='cursor-pointer rounded-md bg-[#63559A] text-white px-4 py-3 font-semibold'>Get Started</button>
      </div>
      {menu && <Ham props={setMenu} menu={menu}/>}
    </div>
  )
}

export default Nav