/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from './Button';

function Navbar({ timeline }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className='w-full m-auto py-2 z-[999] flex max-md:items-start nav fixed justify-between items-center max-md:px-20'>
      <div className='flex gap-1 nav1 items-center'>
        <h1>
          <img
            src=""
            className='object-cover'
            alt=""
          />
        </h1>
        <h1 className='text-xl font-semibold st text-[#4ee4ff] select-none'>ST NETWORK</h1>
      </div>

      {/* Responsive Menu Button */}
      <div className='flex flex-col justify-center  items-center'>
      <button className='hidden max-md:block' onClick={toggleMobileMenu}>
        <span className='text-2xl'>&#9776;</span>
      </button>

      <div className=''>
      <div className={`flex flex-col md:flex-row gap-4 items-center uppercase ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
        {["Home", "PACKAGES" , "ABOUT US"].map((item, index) => (
          <a className='text-sm font-semibold' href={`#${item}`} key={index}>
            {item}
          </a>
        ))}
        <a href="/signup"><Button title={"Sign Up"} /></a>
      </div>
      </div>
      </div>
     
    </div>
  );
}

export default Navbar;