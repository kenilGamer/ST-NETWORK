/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
function Hero1() {
  return (
    <div className='w-full hero1 h-screen top-0 relative '>
        <div className='flex items-center absolute justify-center  w-full max-md:w-[140vw] pointer-events-none img object-cover h-full'>
            <img src="/src/assets/wallpaperflare.com_wallpaper (2).jpg" className='w-full max-md:w-[500vw] max-md:h-[100vh]' alt="" />
        </div>
        <div className='absolute w-full h-full herodiv flex flex-col items-center justify-center p-20 z-10'>
          <div className=' w-full h-full flex items-center justify-center'>
            <h1 className='text-8xl st text-[#20dbfc] select-none'>ST NETWORK</h1>
          </div>
          <div className='w-full flex items-center justify-between'>
              <Button title={'join a game'} icon={<RiAccountPinCircleFill className='text-2xl' />} linkTo={'/docs/introduction'} />
              <Button title={'join discord'} icon={<FaDiscord className='text-2xl' />}/>
          </div>
        </div>
    </div>
  )
}

export default Hero1