import React from 'react'
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className='container mt-10'>
      <h2 className=' capitalize font-semibold lg:text-5xl text-4xl text-blue-600'>contact us</h2>
      <div className='flex flex-col lg:flex-row gap-y-16 py-16 lg:px-20 px-4 mt-5 shadow-lg rounded-md'>
        
        <div className='flex flex-col lg:items-start items-cente gap-y-4 lg:w-1/2'>
          <h3 className='font-medium text-xl'>Leave us a message</h3>
          <form action="https://t.me/s_01110010" method="post" className='flex flex-col gap-y-4 lg:w-2/3'>
            <input type="text" placeholder='Name' className='border border-[#B4BEC8] p-2 rounded outline-none'/>
            <input type="email" placeholder='Your email' className='border border-[#B4BEC8] p-2 rounded outline-none'/>
            <input className='border border-[#B4BEC8] p-2 pb-12 rounded outline-none' placeholder='Briefly describe your project'/>
            <button type="submit" className='text-white bg-blue-600 rounded-md p-3 w-2/3'>Send</button>
          </form>
        </div>
        
        <div className='flex flex-col gap-5'>
          <ul className='flex flex-col gap-5'>
            <li>
              <a href="#" className='flex gap-2 items-center'>
                <GrLocation className='min-w-6 min-h-6 text-blue-600'/>
                <span className='break-words'>
                Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                </span>
              </a>
            </li>

            <li>
              <a href="#" className='flex gap-2 items-center'>
                <FiPhone className='w-6 h-6 text-blue-600'/>
                <span>
                +998 33 66 00 999
                </span>
              </a>
            </li>

            <li>
              <a href="#" className='flex gap-2 items-center'>
                <MdOutlineEmail className='w-6 h-6 text-blue-600'/>
                <span>
                azizbek.b@udevs.io
                </span>
              </a>
            </li>

            <li>
              <a href="#" className='flex gap-2 items-center'>
                <PiTelegramLogo className='w-6 h-6 text-blue-600'/>
                <span>
                t.me/azizbekbakhodirov
                </span>
              </a>
            </li>

            <li className='flex gap-4'>

              <a href="#" className='flex gap-2 items-center'>
                <FaYoutube className='w-6 h-6 text-blue-600'/>
              </a>

              <a href="#" className='flex gap-2 items-center'>
                <FaInstagram className='w-6 h-6 text-blue-600'/>
              </a>

              <a href="#" className='flex gap-2 items-center'>  
              <FaFacebook className='w-6 h-6 text-blue-600'/>
              </a>

              <a href="#" className='flex gap-2 items-center'>  
              <FaTwitter className='w-6 h-6 text-blue-600'/>
              </a>

            </li>
          </ul>

          <iframe src="https://api-maps.yandex.ru/frame/v1/-/CDg7UCnz" ></iframe>
        </div>
        {/* https://yandex.com/maps/-/CDg7UCnz */}
      </div>
    </div>
  )
}
