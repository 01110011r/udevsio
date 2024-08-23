import React from 'react'
import { portfolio } from '@/src/re-export'
import Image from 'next/image'


export default function Portfolio() {


    const data = [
        {
          id:"deliver",
          title: portfolio.deleverTitle,
          overlay: portfolio.deleveryOverlay,
          text: "Delever - Delivery service automation targeted at both consumers and restaurants.",
          weDid: [
            {svg:portfolio.webSite, name: 'Website'},
            {svg:portfolio.adminPanel, name: 'Admin panel'},
            {svg:portfolio.crossPlatform, name: 'Crossplatform'},
            {svg:portfolio.webDesign, name: 'Web design'},
            {svg:portfolio.mobileDesign, name: 'Mobile design'}
          ],
          img: {left: true, img: portfolio.mobile, bg: portfolio.bgPattern}
        },
        {
          id:"smsuz",
          title: portfolio.smsuzTitle,
          overlay: portfolio.smsuzOverlay,
          text: "Smsuz.uz - It is a platform for bulk SMS messaging.",
          weDid:  [
            {svg:portfolio.webSite, name: 'Website'},
            {svg:portfolio.adminPanel, name: 'Admin panel'},
            {svg:portfolio.crossPlatform, name: 'Crossplatform'}
          ],
          img: {left: false, img: portfolio.desktop, bg: portfolio.bgPattern}
        },
        {
          id:"goodzone",
          title: portfolio.goodzoneTitle,
          overlay: portfolio.goodzoneOverlay,
          text: "Goodzone - Internet shop of household appliances in Uzbekistan.",
          weDid:  [
            {svg:portfolio.webSite, name: 'Website'},
            {svg:portfolio.adminPanel, name: 'Admin panel'},
            {svg:portfolio.crossPlatform, name: 'Crossplatform'},
            {svg:portfolio.webDesign, name: 'Web design'},
            {svg:portfolio.mobileDesign, name: 'Mobile design'}
          ],
          img: {left: true, img: portfolio.desktop, bg: portfolio.bgPattern}
        },
        {
          id:"iman",
          title: portfolio.imanTitle,
          overlay: portfolio.imanOverlay,
          text: "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
          weDid:  [
            {svg:portfolio.webSite, name: 'Website'},
            {svg:portfolio.adminPanel, name: 'Admin panel'},
            {svg:portfolio.crossPlatform, name: 'Crossplatform'}
          ],
          img: {left: false, img: portfolio.mobile, bg: portfolio.bgPattern}
        }
    ]

  return (
    <div className='container w-full flex flex-col gap-y-32 mt-10'>
        {
          data.map((item, idx) => {
            return (
              <div className={"flex flex-col items-center pt-32"} key={idx} id={item.id}>
                <div className={`lg:hidden`}>
                <Image className={`${item.img.left && 'content-end'}`} src={item.title} alt='customer logo'/>
                </div>
                <div className={`flex lg:flex-row flex-col items-center gap-5`}>
                  <div className={`bg-[url('../../public/bg-pattern.png')] bg-cover p-2 rounded-lg bg-no-repeat ${item.img.left==false && 'lg:order-2 order-1'}`}>
                  <Image src={item.img.img} alt='mobile or desktop'/>
                  </div>
                  <div className={`lg:max-w-[50%] w-full flex flex-col gap-6 lg:items-start items-center ${item.img.left==false && 'lg:order-1 order-2'}`}>

                    <div className={`lg:block hidden`}>
                    <Image className={`${item.img.left && 'content-end'}`} src={item.title} alt='customer logo'/>
                    </div>

                    <Image src={item.overlay} alt='industry type'/>

                    <p>{item.text}</p>

                 
                      <h2 className='font-semibold md:text-2xl text-xl'>What we did?</h2>

                      <div className='grid sm:grid-cols-3 grid-cols-2 gap-2 w-full]'>
                        {
                          item.weDid.map((platform, idx) => {
                            return <div className='bg-[#F4F7FF] rounded-md p-4 flex flex-col items-center justify-center' key={idx}>
                              <Image src={platform.svg} alt='platform logo'/>
                              <span>{platform.name}</span>
                            </div>
                          })
                        }
                      </div>
                  
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
