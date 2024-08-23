import React from 'react'
import AndroidLogo from '../../../public/platforms/android-icon.svg';
import AppleLogo from '../../../public/platforms/apple-icon.svg';
import FlutterLogo from '../../../public/technologies/flutter.svg';
import SwiftLogo from '../../../public/technologies/swift.svg';
import MobileLogo from '../../../public/platforms/mobile-icon.svg';
import KotlinLogo from '../../../public/technologies/kotlin.svg';
import MobileDev from '../../../public/mobile-dev.png';
import CrmIcon from '../../../public/platforms/crm-icon.svg'
import ELearnIcon from '../../../public/platforms/elearning-icon.svg'
import ECommerceIcon from '../../../public/platforms/e-commerce-icon.svg'
import PosIcon from '../../../public/platforms/pos-icon.svg'
import SmsEmailIcon from '../../../public/platforms/sms-email-econ.svg'
import WarehouseIcon from '../../../public/platforms/warehouse-icon.svg'
import Desktop from '../../../public/desktop.png'
import Ux from '../../../public/platforms/ux.png'
import Ui from '../../../public/platforms/ui.png'
import Prototyping from '../../../public/platforms/prototyping.png'
import MobileDesign from '../../../public/platforms/mobile-design.png'
import WebDesign from '../../../public/platforms/web-design.png'
import AtomicDesign from '../../../public/platforms/atomic-design.png'
import Figma from '../../../public/technologies/figma.svg'
import Sketch from '../../../public/technologies/sketch.svg'
import Lottie from '../../../public/technologies/lottie.svg'
import Illustrator from '../../../public/technologies/illustrator.svg'
import Architecture from '../../../public/platforms/architecture.svg'
import AutoTesting from '../../../public/platforms/auto-testing.svg'
import StressTesting from '../../../public/platforms/stress-testing.svg'
import LoadTesting from '../../../public/platforms/load-testing.svg'
import DevOps from '../../../public/platforms/devops.svg'
import Cloud from '../../../public/platforms/cloud.svg'
import CiCd from '../../../public/platforms/cicd.svg'
import Frontend from '../../../public/platforms/frontend.svg'
import Backend from '../../../public/platforms/backend.svg'
import UXUI from '../../../public/platforms/uxui.svg'
import QA from '../../../public/platforms/qa.svg'
import Consulting from '../../../public/consulting.png'
import Image from 'next/image';

export default function AboutServices() {


    const data = [
      
        {
            title: "Development of mobile applications",
            description: "In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.",
            platforms: [
                {icon: AppleLogo, name: 'iOS'},
                {icon: AndroidLogo, name: 'Android'},
                {icon: MobileLogo, name: 'Crossplatform'},
            ],
            technologies: [
                {icon: SwiftLogo, name: 'Swift'},
                {icon: KotlinLogo, name: 'Kotlin'},
                {icon: FlutterLogo, name: 'Flutter'},
            ],
            image: {img: MobileDev, bg: true, left: true},
            bg: false
        },
           
        {
            title: "ERP systems",
            description: "IT Systems of any level of complexity at aconvenient time for you",
            platforms: [
                {icon: CrmIcon, name: 'CRM'},
                {icon: ELearnIcon, name: 'eLearning'},
                {icon: ECommerceIcon, name: 'E-Commerce'},
                {icon: PosIcon, name: 'POS'},
                {icon: SmsEmailIcon, name: 'Sms/Email'},
                {icon: WarehouseIcon, name: 'Warehouse'},

            ],
           
            image: {img: Desktop, bg: true, left: false},
            bg:true
        },
           
        {
            title: "UI / UX design",
            description: "Our company takes a human-centered approach to design",
            platforms: [
                {icon: Ux, name: 'UX'},
                {icon: Ui, name: 'UI'},
                {icon: Prototyping, name: 'Prototyping'},
                {icon: MobileDesign, name: 'Mobile Design'},
                {icon: WebDesign, name: 'Web Design'},
                {icon: AtomicDesign, name: 'Atomic Design'},
            ],
            technologies: [
                {icon: Figma, name: 'Figma'},
                {icon: Sketch, name: 'Sketch'},
                {icon: Lottie, name: 'Lottie'},
                {icon: Illustrator, name: 'Illustrator'},
            ],
            image: {img: MobileDev, bg: true, left: true},
            bg:false
        },
           
        {
            title: "Optimization Infrastructure",
            description: "Our experienced professionals will help you optimize your infrastructure",
            platforms: [
                {icon: Architecture, name: 'Architecture'},
                {icon: AutoTesting, name: 'Auto Testing'},
                {icon: StressTesting, name: 'Stress Testing'},
                {icon: LoadTesting, name: 'Load Testing'},
                {icon: DevOps, name: 'DevOps'},
                {icon: Cloud, name: 'Cloud'},
                {icon: CiCd, name: 'CI/CD'},

            ],
            image: {img: Desktop, bg: true, left: false},
            bg:true
        },
           
        {
            title: "IT consulting",
            description: "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
            platforms: [
                {icon: Frontend, name: 'Frontend'},
                {icon: Backend, name: 'Backend'},
                {icon: Architecture, name: 'Architekture'},
                {icon: DevOps, name: 'DevOps'},
                {icon: UXUI, name: 'UX/UI'},
                {icon: QA, name: 'QA'}
            ],
            image: {img: Consulting, bg: false, left: true},
            bg:false
        },
        
    ]

  return (
    <>
        {
            data.map((item, index) => (
                <div key={index} className={`${item.bg && 'bg-[#F4F7FF]'} py-24 w-full`} id={'service-'+index}>
                    <div className='container'>
                    <h2 className='font-bold lg:text-6xl xs:text-4xl text-3xl text-blue-600 mb-3 md:w-3/4'>{item.title}</h2>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <div className={`flex flex-col gap-4 ${item.image.left && 'lg:order-1'} order-2`}>
                        <p className='lg:text-xl'>
                            {item.description}
                        </p>
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-2'>
                            {item.platforms.map((plarform, idx) => (
                                <div key={idx} className={`flex flex-col gap-2 p-3 rounded-md ${item.bg ? 'bg-[#E0E8FF]' : 'bg-[#F4F7FF]'}`}>
                                    <Image src={plarform.icon} alt={plarform.name+' logo'}/>
                                    <h3 className=' break-words'>{plarform.name}</h3>
                                </div>
                            ))}
                        </div>
                        {item.technologies && <>

                            <h2 className='font-semibold text-2xl'>Technologies</h2>
                            <div className='flex flex-wrap items-center gap-7'>
                            {item.technologies.map((tech, idx) => (
                                <div key={idx} className='flex flex-col gap-2'>
                                    <Image src={tech.icon} alt={tech.name+' logo'}/>
                                    <h3>{tech.name}</h3>
                                </div>
                            ))}
                            </div>
                        </>
                        }
                    </div>
                    <div className={`${item.image.bg && "bg-[url('../../public/bg-pattern.png')]"} rounded-md w-2/3 bg-no-repeat bg-cover flex justify-center ${item.image.left && 'lg:order-2'} order-1 py-10`}>
                        <Image src={item.image.img} alt={item.title}/>
                    </div>
                    </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}
