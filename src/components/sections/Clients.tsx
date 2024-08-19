'use client'
import React, { useEffect, useRef } from 'react'

export default function Clients() {

  function SlideHandler({children, fromLeft=false}:{children:React.ReactNode[], fromLeft?: boolean}) {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const scroll = scrollRef.current;
      if (!scroll) return;
    
      console.log(fromLeft)
      const scrollWidth = scroll.scrollWidth / 2;
      const clone = scroll.cloneNode(true);
     
      if (fromLeft) {
        console.log(clone, scroll)
        scroll.insertBefore(clone, scroll.lastChild); // Klon elementlarni boshiga qo'shish
        console.log(scroll)
      } else {
        console.log(clone, scroll)
        scroll.appendChild(clone); // Klon elementlarni oxiriga qo'shish
        console.log(scroll)
      }
    
      const scrollSpeed = 0.5;
      let start = 0;

      const animateScroll = () => {
       if(!fromLeft) {
        start += scrollSpeed;
        if (start >= scrollWidth) {
          start = 0;
        }
        scroll.style.transform = `translateX(-${start}px)`;
       } else {
        start -= scrollSpeed;
        // console.log(start, fromLeft)
        if(start <= -scrollWidth) {
          start = 0;
        }
        scroll.style.transform = `translateX(-${Math.abs(start)}px)`;
       }
        requestAnimationFrame(animateScroll);
      };
    
      animateScroll();
    }, [fromLeft]);


    return (
      <div className='relative overflow-hidden'>
      <div ref={scrollRef} className='flex gap-8 w-full'>
        {
          children
        }
      </div>
    </div>
    )
    
}


  return (
    <div className='w-full'>
      <div className='container mb-10'>
      <h2 className='text-5xl text-blue-600 font-bold'>Our Clients</h2>
      </div>

      <div className='flex flex-col gap-8'>
      {
      <SlideHandler>
        {
             [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
            <div key={idx} className='flex-shrink-0 w-64 h-64 bg-gray-200 flex items-center justify-center'>
              <p>This is the {item} item.</p>
            </div>
          ))
        }
      </SlideHandler>
      }
      {
        <SlideHandler fromLeft={true}>
        {
             [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
            <div key={idx} className='flex-shrink-0 w-64 h-64 bg-gray-200 flex items-center justify-center'>
              <p>This is the {item} item.</p>
            </div>
          ))
        }
            </SlideHandler>
      }
      </div>

    </div>
 
    
  )
}
