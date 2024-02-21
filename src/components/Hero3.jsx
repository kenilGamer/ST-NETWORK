/* eslint-disable no-unused-vars */
// import React from 'react'
import Shop from './Shop'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Hero3() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
 
  useGSAP(() => {
      gsap.from(container.current, {
        opacity:0,
        // x:100,
       //  transform:"translateX(390%)",
        duration: 6,
        stagger:5.5,
        scrollTrigger: {
          scroll: "body",
          trigger: container.current,
          start: 'top 30%', // Adjust the start position as needed
          end: 'top 20%',  // Adjust the end position as needed
          scrub: true,
          // markers: true,
         //  pin: true
        },
        // Duration should be a number, not a string
      });
      gsap.from('.aab', {
        opacity:0,
        // x:100,
       //  transform:"translateX(390%)",
        duration: 3,
       //  stagger:0.5,
        scrollTrigger: {
          scroll: "body",
          trigger: ".aab",
          start: 'top 70%', // Adjust the start position as needed
          end: 'top 20%',  // Adjust the end position as needed
          scrub: 5,
          // markers: true,
         //  pin: true
        },
      });
    });
  const data =  [
    {img: "/src/assets/wallpaperflare.com_wallpaper (2).jpg", title: "rank1", description:["♦ Up to 15 Auction House Listings and more" ," ♦ Get a free in-game item with every purchase!", "♦ Limited time offer, ends soon!" ],price: "500", stock: true},
    {img: "/src/assets/wallpaperflare.com_wallpaper (2).jpg", title: "rank1", description:["♦ Up to 15 Auction House Listings and more" ," ♦ Get a free in-game item with every purchase!", "♦ Limited time offer, ends soon!" ],price: "500", stock: true},
    {img: "/src/assets/wallpaperflare.com_wallpaper (2).jpg", title: "rank1", description:["♦ Up to 15 Auction House Listings and more" ," ♦ Get a free in-game item with every purchase!", "♦ Limited time offer, ends soon!" ],price: "500", stock: false},
    {img: "/src/assets/wallpaperflare.com_wallpaper (2).jpg", title: "rank1", description:["♦ Up to 15 Auction House Listings and more" ," ♦ Get a free in-game item with every purchase!", "♦ Limited time offer, ends soon!" ],price: "500", stock: false},

  ]
  return (
    <div className='w-full  relative py-2 px-10 flex flex-col min-h-screen'>
        <h1 className='st text-center aab text-6xl'>Welcome to the shop!</h1>
        
        <div ref={container} className='flex w-full items-center min-h-[85vh] justify-between max-md:justify-center gap-5 flex-wrap'>
          {data.map((item,index)=>(<Shop key={index} item={item}/>))}
        </div>
    </div>
  )
}

export default Hero3