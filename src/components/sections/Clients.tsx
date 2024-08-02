'use client'
import React, { useEffect, useRef } from 'react'

export default function Clients() {

  function SlideHandler({children, fromLeft=false}:{children:React.ReactNode[], fromLeft?: boolean}) {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const scroll = scrollRef.current;
      if (!scroll) return;
    
      console.log(scroll.scrollWidth)
      const scrollWidth = scroll.scrollWidth / 2;
      const clone = scroll.cloneNode(true);
      scroll.appendChild(clone);
    
      let start = 0;
      const scrollSpeed = 0.5; // Tezlikni sozlash
    
      const animateScroll = () => {
       if(!fromLeft) {
        start += scrollSpeed;
        if (start >= scrollWidth) {
          start = 0;
        }
        scroll.style.transform = `translateX(-${start}px)`;
       } else {
        start = scrollWidth;
        start -= scrollSpeed;
        if(start<=0) {
          start = scrollWidth;
        }
        scroll.style.transform = `translateX(-${start}px)`;
       }
        requestAnimationFrame(animateScroll);
      };
    
      animateScroll();
    }, []);


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
