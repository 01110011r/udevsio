import Image from 'next/image'
import React from 'react'
import TeamLogo from '../../../public/team-logo.svg'
import PhoneLogo from '../../../public/mobile-logo.svg'
import ErpLogo from '../../../public/erp-logo.svg'
import DesignLogo from '../../../public/design-logo.svg'
import Oprimization from '../../../public/optimizator-logo.svg'
import ItConsultingLogo from '../../../public/it-consulting-logo.svg'

export default function Services() {
  return (
    <div className=' container'>
        <h2 className='text-blue-600 lg:text-5xl text-3xl font-semibold mb-10 lg:px-0 px-4'>Our Services</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 lg:px-0 px-4'>

            <div className='flex flex-col gap-6 rounded-lg bg-[#F4F7FF] px-8 pt-8 pb-10'>
                <Image src={TeamLogo} alt='service logo'/>
                <h4 className='capitalize font-semibold'>team</h4>
            </div>

            <div className='flex flex-col gap-6 rounded-lg bg-[#F4F7FF] px-8 pt-8 pb-10'>
                <Image src={PhoneLogo} alt='service logo'/>
                <h4 className='capitalize font-semibold'>Development of mobile
                applications</h4>
            </div>

            <div className='flex flex-col gap-6 rounded-lg bg-[#F4F7FF] px-8 pt-8 pb-10'>
                <Image src={ErpLogo} alt='service logo'/>
                <h4 className='capitalize font-semibold'>Development and
                implementation ERP bsystems</h4>
            </div>

            <div className='flex flex-col gap-6 rounded-lg bg-[#F4F7FF] px-8 pt-8 pb-10'>
                <Image src={DesignLogo} alt='service logo'/>
                <h4 className='capitalize font-semibold'>User interface, User
                experience design</h4>
            </div>

            <div className='flex flex-col gap-6 rounded-lg bg-[#F4F7FF] px-8 pt-8 pb-10'>
                <Image src={Oprimization} alt='service logo'/>
                <h4 className='capitalize font-semibold'>Optimization IT consulting
                infrastructure</h4>
            </div>

            <div className='flex flex-col gap-6 rounded-lg bg-[#F4F7FF] px-8 pt-8 pb-10'>
                <Image src={ItConsultingLogo} alt='service logo'/>
                <h4 className='capitalize font-semibold'>IT consulting</h4>
            </div>
        </div>
    </div>
  )
}
