import Image from 'next/image'
import React from 'react'
import mainLogo from '../../public/udevs-logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Future() {
  return (
    <div className='bg-[#F4F7FF] py-10'>

      <div className="container flex flex-col items-center gap-y-10">

        <a href="#">
        <Image src={mainLogo} alt='udevs logo' className='w-32'/>  
        </a>

        <div className='flex lg:flex-row flex-col justify-between gap-y-7 w-full'>
          <div>
            <h3 className='font-semibold text-xl mb-4'>About us</h3>
            <ul className='flex flex-col gap-y-1'>
              <li className='text-blue-600 hover:underline'><a href="#">Direction</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Command</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Tools</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Clients</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-xl mb-4'>Services</h3>
            <ul className='flex flex-col gap-y-1'>
              <li className='text-blue-600 hover:underline'><a href="#">Development of mobile applications</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Development and implementation ERP systems</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">User interface, User experience design</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">IT consulting</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Optimization IT consulting infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-xl mb-4'>Portfolio</h3>
            <ul className='flex flex-col gap-y-1'>
              <li className='text-blue-600 hover:underline'><a href="#">Delever</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Sms.uz</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Goodzone</a></li>
              <li className='text-blue-600 hover:underline'><a href="#">Iman</a></li>
            </ul>
          </div>

        </div>

        <div className='border-t-2 pt-6 w-full flex md:flex-row items-center flex-col justify-between gap-y-4 text-center'>
        <span className='text-blue-600 md:order-1 order-2'>© 2024 Udevs. All rights reserved</span>
        <div className='flex items-center gap-3 md:order-2 order-1'>
          <a href="#" className='p-2 rounded-full bg-[#cedbfc]'>
            <FaInstagram className='text-blue-600 w-6 h-6'/>
          </a>
          <a href="#" className='p-2 rounded-full bg-[#cedbfc]'>
            <FaTwitter className='text-blue-600 w-6 h-6'/>
          </a>
          <a href="#" className='p-2 rounded-full bg-[#cedbfc]'>
            <FaYoutube className='text-blue-600 w-6 h-6'/>
          </a>
        </div>
        </div>

      </div>  
    </div>
  )
}
