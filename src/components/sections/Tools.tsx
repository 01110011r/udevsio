'use client'
import React, { useState } from 'react'
// import technologies from '../../../public/technologies/promotheus.svg'
import { technologies } from '@/src/re-export';
import Image from 'next/image';

export default function Tools() {

  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const handleRadioChange = (tool: string) => {
    setSelectedTool(prevTool => (prevTool === tool ? null : tool));
    console.log(tool)
  };

  return (
    <div className='py-14 bg-[#F4F7FF] w-full'>
        <div className=' container'>
        <h2 className=' lg:font-bold font-semibold text-5xl text-blue-600 mb-10'>Tools</h2>
        <div className='grid lg:flex lg:items-center lg:font-medium lg:justify-between grid-cols-2 gap-4 font-semibold'>
        {['Frontend', 'Backend', 'DevOps', 'Testing', 'UX/UI', 'Mobile', 'Infrastructure'].map(tool => (
            <label key={tool} className={`flex gap-2 cursor-pointer ${tool === 'Infrastructure' && 'col-span-2'}`}>
              <input
                type='radio'
                className='w-5 cursor-pointer'
                name='tools_type'
                checked={selectedTool === tool}
                onClick={() => handleRadioChange(tool)}
              />
              <span className='sm:text-xl'>{tool}</span>
            </label>
          ))}
        </div>

        <div>
          {
            technologies.map((tool, i) =>(
              <div
               key={i}
               className={`${tool.type==selectedTool || tool.type==null ? `bg-[${tool.bg}]` : ' opacity-25'}`}
               >
                {
                  <Image src={tool.logo} alt={tool.name + ' logo'}/>
                }
              </div>
            ))
          }
        </div>


        </div>
    </div>
  )
}
