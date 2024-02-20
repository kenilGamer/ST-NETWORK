/* eslint-disable no-unused-vars */
import React from 'react'
import Shop from './Shop'

function Hero3() {
  return (
    <div className='w-full relative py-20 px-20 gap-10 flex flex-col h-screen'>
        <h1 className='st text-center text-6xl'>Welcome to the shop!</h1>
        
        <div className='flex w-full items-center justify-between'>
        <Shop/>
        <Shop/>
        <Shop/>
        </div>
    </div>
  )
}

export default Hero3