import React from 'react'
import { portfolio } from '@/src/re-export'
import Image from 'next/image'


export default function Portfolio() {


    const data = [
        {
          title: portfolio.deleverTitle,
          overlay: portfolio.deleveryOverlay,
          text: "Delever - Delivery service automation targeted at both consumers and restaurants.",
          weDid: [portfolio.webSite, portfolio.adminPanel, portfolio.crossPlatform, portfolio.webDesign, portfolio.mobileDesign],
          img: {left: true, img: portfolio.mobile, bg: portfolio.bgPattern}
        },
        {
          title: portfolio.smsuzTitle,
          overlay: portfolio.smsuzOverlay,
          text: "Smsuz.uz - It is a platform for bulk SMS messaging.",
          weDid: [portfolio.webSite, portfolio.adminPanel, portfolio.crossPlatform ],
          img: {left: false, img: portfolio.desktop, bg: portfolio.bgPattern}
        },
        {
          title: portfolio.goodzoneTitle,
          overlay: portfolio.goodzoneOverlay,
          text: "Goodzone - Internet shop of household appliances in Uzbekistan.",
          weDid: [portfolio.webSite, portfolio.adminPanel, portfolio.crossPlatform, portfolio.webDesign, portfolio.mobileDesign],
          img: {left: true, img: portfolio.desktop, bg: portfolio.bgPattern}
        },
        {
          title: portfolio.imanTitle,
          overlay: portfolio.imanOverlay,
          text: "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
          weDid: [portfolio.webSite, portfolio.adminPanel, portfolio.crossPlatform ],
          img: {left: false, img: portfolio.mobile, bg: portfolio.bgPattern}
        }
    ]

  return (
    <div className='container w-full'>
        {
          data.map((item) => {
            return (
              <div>
                <Image src={item.title} alt='customer logo'/>
                <div>
                  <div>
                  <Image src={item.img.img} alt='mobile or desktop'/>
                  </div>
                  <div>
                    <Image src={item.overlay} alt='industry type'/>
                    <p>{item.text}</p>
                    <div>
                      <h2>What we did?</h2>
                      <div>
                        {
                          item.weDid.map((platformLogo) => {
                            return <div>
                              <Image src={platformLogo} alt='platform logo'/>
                            </div>
                          })
                        }
                      </div>
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
