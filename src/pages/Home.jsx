/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import LocomotiveScroll from 'locomotive-scroll';

function Home() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      autoResize: true,
      smoothScrolling: true,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 4.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
  });
  return (
    <div className='w-full mni-h-screen bg-teal-400 text-white select-none p-0'>
        <Navbar/>
        <Hero1/>
        <Hero2/>
    </div>
  )
}

export default Home