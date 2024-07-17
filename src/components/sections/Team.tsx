import Image from 'next/image'
import React from 'react'
import TeamImage from '../../../public/team-img.png'

export default function Team() {
  return (
    <div className='bg-[#F4F7FF] w-full py-14'>
        <div className='container'>
            <h2 className='font-bold text-blue-600 text-4xl lg:mb-0 mb-4'>Team</h2>
            <div className='flex items-center justify-between lg:flex-row flex-col'>
            <div className='flex flex-col gap-12 lg:max-w-[40%] lg:order-1 order-2 lg:pt-0 pt-4'>
                <p>For each project, we form a team that includes a
                project manager, business analyst, UI / UX designer,
                DevOps, QA engineer, backend and front-end
                developers.</p>
            <h3 className='font-bold text-blue-600 text-4xl'>100+</h3>
            <h4 className='font-semibold text-3xl'>Dedicated team</h4>
            </div>
            <Image src={TeamImage} alt='team image' className='lg:order-2 order-1'/>
            </div>
        </div>
    </div>
  )
}
