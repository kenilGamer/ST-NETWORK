/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import LocomotiveScroll from 'locomotive-scroll';
import Hero3 from '../components/Hero3';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react';
import Hero4 from '../components/Hero4';
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

  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const tl = gsap.timeline()
  useGSAP(() => {
      // ✅ safe, created during execution, selector text scoped
      tl.from(".nav1 h1", {
        opacity:0,
        y:-60,
        duration:2,
        stagger:.2
      });
      tl.from(".nav a", {
        opacity:0,
        y:-60,
        duration:1,
        stagger:.2
      });
      tl.from(".hore-1", {
        opacity:0,
        y:-60,
        duration:1,
        stagger:.2
      });
      tl.from(".button-1", {
        opacity:0,
        x:-90,
        duration:0.6,
        stagger:.2
      });
      tl.from(".button-2", {
        opacity:0,
        x:90,
        duration:0.6,
        stagger:.2
      });
    });
  return (
    <div className='w-full mni-h-screen bg-teal-400 text-white select-none p-0'>
        <Navbar/>
        <Hero1/>
        <Hero2/>
        <Hero3/>
        {/* <Hero4/>        */}
    </div>
  )
}

export default Home