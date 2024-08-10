'use client'
import React from 'react'
import { howwework as howWeWorkData } from '@/src/re-export'
import Image from 'next/image'

export default function HowWeWork() {
  return (
    <div className='container mt-10'>
        <h2 className='font-semibold lg:text-5xl text-3xl text-blue-600'>How we work!</h2>
        <div className='flex lg:flex-row flex-row items-center justify-center'>
            <div className={`flex lg:flex-col flex-row items-center`}>
                <Image src={howWeWorkData.contactIcon} alt='contact'/>

                <div className='flex flex-col lg:items-center items-start text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Contact</h4>
                    <p className='max-w-[80%]'>
                    Send us your project request or
                    project idea.
                    </p>
                </div>
            </div>

            <div className={`flex lg:flex-col flex-row items-center`}>
                <Image src={howWeWorkData.analysisIcon} alt='analysis'/>

                <div className='flex flex-col lg:items-center items-start text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Analysis</h4>
                    <p className='max-w-[80%]'>
                    We will contact you to clarify
                    your project requirements.
                    </p>
                </div>
            </div>

            <div className={`flex lg:flex-col flex-row items-center`}>
                <Image src={howWeWorkData.analysisIcon} alt='analysis'/>

                <div className='flex flex-col lg:items-center items-start text-center gap-2'>
                    <h4 className='font-semibold text-xl'>Analysis</h4>
                    <p className='max-w-[80%]'>
                    We will contact you to clarify
                    your project requirements.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
