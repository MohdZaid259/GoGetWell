import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

function Faq() {
  return (
    <div className='bg-[#F0F3FF] flex flex-col justify-center items-center p-4 lg:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-center mt-8'>Frequently Asked Questions</h1>
        <div class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className='lg:w-1/2 w-full bg-white p-4 border rounded-md mb-8 shadow-2xl'>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>What is gogetwell.ai?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>What is the AI Front Office for Healthcare Agents?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>How does the AI Agent assist me in my healthcare business?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>Can I customize the website for my healthcare services?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>How does this platform support independent healthcare facilitators like me?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>How does the platform help me manage patient leads?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>Is it easy to integrate the platform with the hospitals I work with?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>Is the platform secure and compliant with healthcare regulations?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>How quickly can I get started with the platform?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>What kind of customer support is available if I need help?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className='px-4 font-normal cursor-pointer text-base'>How does the platform help me attract more patients?</AccordionTrigger>
          <AccordionContent className='px-4 text-gray-700'>
          The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  )
}

export default Faq