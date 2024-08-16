'use client'
import Image from 'next/image'
import React from 'react'
import { ReactTyped } from 'react-typed'
import HeroImg from '../../public/hero-img.png'

export default function Hero() {
  return (
    <div className='pt-36 container flex items-center justify-between lg:flex-row flex-col gap-y-10'>
        <div className='flex flex-col gap-6 lg:items-start items-center'>
            <h1 className='font-bold lg:text-6xl text-4xl'><span className='underline text-blue-600'>u</span>devs</h1>
            <h3 className='font-semibold lg:text-2xl text-xl'>IT-Outsorcing Company</h3>
            <ReactTyped
            strings={[
                'Optimization IT consulting infrastructure',
                'User interface, User experience design',
                'IT consulting',
                'Development of mobile applications',
                'Development and implementation ERP systems'
            ]}
            typeSpeed={70}
            backSpeed={30}
            loop
            className='font-semibold lg:text-2xl text-xl text-blue-600'
            />
            <button className='text-white rounded-lg bg-blue-600 py-4'><a href="#" className='px-20 py-4'>Contact</a></button>
        </div>
        <Image src={HeroImg} alt='hero image'/>
    </div>
  )
}
