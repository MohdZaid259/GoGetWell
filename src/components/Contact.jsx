import React from 'react'

function Contact() {
  return (
    <div className='p-8 px-4 md:px-28 gap-8 flex justify-center items-center flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl font-bold my-4'>Let's get in touch!</h1>
        <span className='text-gray-700 text-lg'>Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.</span>

        <div className='py-4 space-y-4'>
          <div className='flex justify-center items-center max-w-max'>
              <div className='p-3 rounded-md bg-violet-100 mr-4'>
                <svg stroke="#63559A" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path></svg>              
              </div>
              <div className='flex flex-col mt-2'>
                <span className='text-gray-600'>Phone</span>
                <span className='text-sm text-black'>+91 9811396858</span>
              </div>
          </div>
          <div className='flex justify-center items-center max-w-max'>
              <div className='p-3 rounded-md bg-violet-100 mr-4'>
                <svg stroke="#63559A" fill="none" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor"></path></svg>
              </div>
              <div className='flex flex-col mt-2'>
                <span className='text-gray-600'>Email</span>
                <span className='text-sm text-black'>hello@gogetwell.ai</span>
              </div>
          </div>
        </div>
        
        <span className='text-xl font-semibold'>Connect With Us</span>
        <div className='flex justify-center items-center max-w-max my-4'>
          <div className='p-3 rounded-md bg-violet-100 max-w-max mr-4'>
          <svg stroke="#63559A" fill="#63559A" stroke-width="0" viewBox="0 0 16 16" class="w-6 h-6 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"></path></svg>             
          </div>
          <div className='p-3 rounded-md bg-violet-100 max-w-max mr-4'>
          <svg stroke="#63559A" fill="#63559A" stroke-width="0" viewBox="0 0 16 16" class="w-6 h-6 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>           
          </div>
        </div>
      </div>

      <div className='p-8 shadow-2xl bg-[#FAFAFA] rounded-2xl md:w-1/2 w-full flex justify-center items-center flex-col gap-2'>
        <input className='border w-full p-2 px-4 rounded' type="text" placeholder='Full Name'/>
        <input className='border w-full p-2 px-4 rounded' type="text" placeholder='Email'/>
        <textarea className='border w-full p-2 px-4 rounded' rows={4} name="message" placeholder='Message'></textarea>
        <button className='bg-[#63559A] text-white w-full py-[10px] rounded-md font-semibold shadow border border-white duration-200 hover:text-[#63559A] hover:border-[#63559A] hover:bg-white'>Submit</button>
      </div>
    </div>
  )
}

export default Contact