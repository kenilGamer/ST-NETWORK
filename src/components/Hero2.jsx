/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Hero2() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
 
  useGSAP(() => {
      gsap.from(container.current, {
        opacity:0,
        // x:100,
       //  transform:"translateX(390%)",
        duration: 3,
       //  stagger:0.5,
        scrollTrigger: {
          scroll: "body",
          trigger: container.current,
          start: 'top 80%', // Adjust the start position as needed
          end: 'top 20%',  // Adjust the end position as needed
          scrub: 1,
          // markers: true,
         //  pin: true
        },
        // Duration should be a number, not a string
      });
      gsap.from('.aabb', {
        opacity:0,
        // x:100,
       //  transform:"translateX(390%)",
        duration: 3,
       //  stagger:0.5,
        scrollTrigger: {
          scroll: "body",
          trigger: ".aabb",
          start: 'top 80%', // Adjust the start position as needed
          end: 'top 20%',  // Adjust the end position as needed
          scrub: 1,
          // markers: true,/
         //  pin: true
        },
      });
    });
  return (
    <div  className=' w-full h-screen hero2 bg-[#032329] z-[10] relative flex flex-col  items-center'>
      <h1  className='text-white text-8xl hero2text aabb font-bold p-20 z-10 text-center select-none'>Abot us</h1>
      <div ref={container} className='text-xl hero2text px-20'>
        <p>• Unique Skyblock Features: Explore custom islands, battle epic bosses, and unlock exciting new content that keeps the experience fresh.</p>
        <p>• Thriving Community: Connect with friendly players, form guilds, and       work together to achieve your goals.</p>
        <p>• Competitive Spirit: Prove your prowess on our balanced leaderboards    and claim your place among the Skyblock Titans.</p>
        <p>• Regular Events: Participate in exciting server-wide events,                         challenges, and contests to win awesome prizes.</p>
        <p>• Dedicated Staff: Our friendly and helpful staff is always on hand to        ensure you have a smooth and enjoyable experience.
  Ready to join the adventure ?</p>
      </div>
    </div>
  )
}

export default Hero2