/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='nav w-full fixed py-5 px-10 z-[9999] flex items-center justify-between'>
        <div>
            <img src="" alt="" />
            <h3 className='text-2xl st text-[#49e4ff] select-none'><a href="#">ST NETWORK</a></h3>
        </div>
        <div className='flex items-center gap-10 font-semibold' >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#"><Button title={"Sign Up"} /></a>
        </div>
    </div>
  )
}

export default Navbar