'use client'
import React from 'react'
import { howwework as howWeWorkData } from '@/src/re-export'
import Image from 'next/image'

export default function HowWeWork() {
  return (
    <div className='container mt-10'>
        <h2 className='font-semibold lg:text-5xl text-3xl text-blue-600 mb-8'>How we work!</h2>
        <div className={`flex lg:flex-row flex-col items-start justify-center gap-y-5 after:lg:content-['........................'] after:text-blue-600 after:lg:animate-marquee after:absolute after:-z-10 after:pt-6`}>

            <div className={`flex lg:flex-col flex-row items-center gap-x-2`}>
                <Image src={howWeWorkData.contactIcon} alt='contact'/>

                <div className='flex flex-col lg:items-center items-start lg:text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Contact</h4>
                    <p className='lg:max-w-[80%]'>
                    Send us your project request or
                    project idea.
                    </p>
                </div>
            </div>
{/* <span className='pt-10'>....</span> */}
            <div className={`flex lg:flex-col flex-row items-center gap-x-2`}>
                <Image src={howWeWorkData.analysisIcon} alt='analysis'/>

                <div className='flex flex-col lg:items-center items-start lg:text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Analysis</h4>
                    <p className='lg:max-w-[80%]'>
                    We will contact you to clarify
                    your project requirements.
                    </p>
                </div>
            </div>

            <div className={`flex lg:flex-col flex-row items-center gap-x-2`}>
                <Image src={howWeWorkData.offerIcon} alt='analysis'/>

                <div className='flex flex-col lg:items-center items-start lg:text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Offer</h4>
                    <p className='lg:max-w-[80%]'>
                    We will provide you with our
                    free, non-binding application.
                    </p>
                </div>
            </div>

            <div className={`flex lg:flex-col flex-row items-center gap-x-2`}>
                <Image src={howWeWorkData.teamIcon} alt='analysis'/>

                <div className='flex flex-col lg:items-center items-start lg:text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Team</h4>
                    <p className='lg:max-w-[80%]'>
                    We provide a team for your
                    requirements.
                    </p>
                </div>
            </div>

            <div className={`flex lg:flex-col flex-row items-center gap-x-2`}>
                <Image src={howWeWorkData.startIcon} alt='analysis'/>

                <div className='flex flex-col lg:items-center items-start lg:text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Start</h4>
                    <p className='lg:max-w-[80%]'>
                    You will get to know the team and we&apos;ll get started.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}
