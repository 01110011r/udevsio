'use client'
import React, { useState } from 'react'
import { technologies } from '@/src/re-export';
import Image from 'next/image';

export default function Tools() {

  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const handleRadioChange = (tool: string) => {
    setSelectedTool(prevTool => (prevTool === tool ? null : tool));
  };

  return (
    <div className='py-14 bg-[#F4F7FF] w-full' id='tools'>
        <div className='container'>
        <h2 className=' lg:font-bold font-semibold text-5xl text-blue-600 mb-10'>Tools</h2>
        <div className='grid lg:flex lg:items-center lg:font-medium lg:justify-between grid-cols-2 gap-4 font-semibold mb-10'>
        {['Frontend', 'Backend', 'DevOps', 'Testing', 'UX/UI', 'Mobile', 'Infrastructure'].map(tool => (
            <label key={tool} className={`flex gap-2 cursor-pointer ${tool === 'Infrastructure' && 'col-span-2'}`}>
              <input
                type='radio'
                className='w-5 cursor-pointer'
                name='tools_type'
                checked={selectedTool === tool}
                onClick={() => handleRadioChange(tool)}
                readOnly
              />
              <span className='sm:text-xl'>{tool}</span>
            </label>
          ))}
        </div>

        <div className='grid lg:grid-cols-12 sm:grid-cols-5 grid-cols-4 gap-3'>
          {
            technologies.map((tool, i) =>{
              const bg = tool.bg
             return <div
               key={i}
               className={`${tool.type==selectedTool || selectedTool==null ? '' : ' opacity-25'} rounded-md  py-5 flex flex-col gap-3 items-center`}
               style={{background:`${tool.bg}`}}
               >
                {
                  <Image src={tool.logo} alt={tool.name + ' logo'} className='w-6 h-6'/>
                }
                <h3 className='lg:text-sm sm:text-[12px] text-[8px]'>
                  {tool.name}
                </h3>
              </div>
})
          }
        </div>


        </div>
    </div>
  )
}
