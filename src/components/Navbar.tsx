'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import mainlogo from "../../public/udevs-logo.svg"
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export default function Navbar() {

  const [menu, setMenu] = useState<boolean>(false);

  const menuHandler = () => {
    setMenu(!menu);
    console.log(menu)
  }

  return (
    <div className='fixed w-full right-0 left-0 border-b-2 z-10 bg-white'>

      <div className='container flex items-center justify-between py-6 relative overflow-hidden'>

        <Image src={mainlogo} alt='udevs main logo' className='cursor-pointer w-24 h-10' />

        <ul className='lg:flex items-center justify-between font-semibold hidden w-[70%]'>
          <li className='cursor-pointer'>
            <a href="#">
              Direction
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href="#team">
              Command
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href="#our-services">
              Services
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href="#tools">
              Tools
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href="#clients">
              Clients
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href="#">
              Portfolio
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href="#">
              Language
            </a>
          </li>
          <li>
            <button className='bg-blue-700 px-6 py-3 rounded-md text-white'>
              <a href="#contact-us">
                Contact
              </a>
            </button>
          </li>
        </ul>
        <button className='inline-block lg:hidden' onClick={menuHandler}>
          <RxHamburgerMenu className='w-8 h-8 text-blue-600'/>
        </button>
        <div className={`fixed bottom-0 top-0 flex flex-col justify-between bg-white duration-700 ${!menu ? '-right-full' : 'left-0 right-0 lg:hidden'}`}>
          <div className='flex items-center justify-between container py-6 border-b-2'>
            <Image src={mainlogo} alt='udevsio main logo' className='w-24 h-10' />
            <button onClick={menuHandler}>
              <IoClose className='w-8 h-8 text-blue-600' />
            </button>
          </div>
         <ul className='flex flex-col items-center font-semibold gap-4 text-3xl'>
          <li>
  <a href="#">Services</a>
</li>
<li>
  <a href="#">Clients</a>
</li>
<li>
  <a href="#">Command</a>
</li>
          </ul>
         <div className='flex flex-col px-7 items-center gap-5'>
        <button className='bg-blue-600 text-white px-6 py-2 rounded-lg w-full'><a href="#"> Contact </a></button>
        <div>

        </div>
         </div>
        </div>
      </div>
    </div>
  )
}
