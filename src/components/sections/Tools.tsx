'use client'
import React, { useState } from 'react'

export default function Tools() {

  const [toolType, setToolType] = useState<Array<Array<number>>|null>(null)

  return (
    <div className='py-14 bg-[#F4F7FF] w-full'>
        <div className=' container'>
        <h2 className=' lg:font-bold font-semibold text-5xl text-blue-600'>Tools</h2>
        <div className='grid lg:grid-cols-7 grid-cols-2 gap-2'>
            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>Frontend</span>
            </label>

            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>Backend</span>
            </label>

            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>DevOps</span>
            </label>

            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>Testing</span>
            </label>
         
            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>UX/UI</span>
            </label>

            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>Infrastructure</span>
            </label>

            <label className='flex gap-2'>
            <input type='radio' className='w-6' name='tools_type'/>
            <span className='text-2xl'>Mobile</span>
            </label>
 
        </div>
        </div>
    </div>
  )
}
