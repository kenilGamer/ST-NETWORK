/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Shop({ item }) {
  useGSAP(() => {
    gsap.to(".shop", {
      opacity:1,
      y: 30,
      // transform:"translatey(10%)",
      duration: 5,
      stagger:5,
      scrollTrigger: {
        scroll: "body",
        trigger: ".shop",
        start: 'top 10%', // Adjust the start position as needed
        end: 'top 10%',  // Adjust the end position as needed
        scrub: 5,
        // markers: true, 
       //  pin: true
      },
      // Duration should be a number, not a string
    });
  });
  return (
    <div className='w-64 shop -translate-y-20 overflow-hidden'>
      <div className='w-full object-cover h-2/4 bg-sky-600'>
        <img src={item.img} className='w-full h-full' alt="" />
      </div>
      <div className="w-full h-2/4">
        <div className='w-full py-2 px-1 flex flex-col gap-2'>
          <h1 className='st text-center text-2xl'>{item.title}</h1>
          <h1 className='st text-center text-xl'><samp>₹</samp>{item.price} </h1>
          <div className='w-full flex flex-col'>
            <p>Perks:</p>

            {Array.isArray(item.description) && (
              <ul>
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}{index < item.description.length - 1 && <br />}</li>
                ))}
              </ul>
            ) }

           
          </div>
          <div className='mt-4 text-center flex items-center justify-center'>
            {item.stock === true ?  <Button title={`Add to Cart`} color={false} /> : <Button title={`Out of Stock `} color={true} disabled />}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Shop;
