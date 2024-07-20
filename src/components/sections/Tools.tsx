'use client'
import React, { useState } from 'react'

export default function Tools() {

  const [toolType, setToolType] = useState<Array<Array<number>>|null>(null)

  return (
    <div className='py-14 bg-[#F4F7FF] w-full'>
        <div className=' container'>
        <h2 className=' lg:font-bold font-semibold text-5xl text-blue-600'>Tools</h2>
        <form className='flex flex-col gap-5'>
          <div>
            <label className='flex gap-2'>
            <input type='radio' className='w-6'/>
            <span className='text-3xl font-semibold'>Frontend</span>
            </label>

            <label className='flex gap-2'>
            <input type='radio' className='w-6'/>
            <span className='text-3xl font-semibold'>Backend</span>
            </label>
          </div>
        </form>
        </div>
    </div>
  )
}
