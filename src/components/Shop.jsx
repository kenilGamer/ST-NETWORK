/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';

function Shop({ item }) {
  return (
    <div className='w-64 min-h-[70vh] shop bg-sky-500 overflow-hidden'>
      <div className='w-full object-cover h-2/4 bg-sky-600'>
        <img src={item.img} className='w-full h-full' alt="" />
      </div>
      <div className="w-full h-2/4">
        <div className='w-full py-4 px-1 flex flex-col gap-2'>
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
          <button className='mt-4 text-center flex items-center justify-center' onClick={() => {}}>{
            item.stock === true ?  <Button title={`Add to Cart`} /> : <Button title={`Out of Stock `} color={`bg-red-500`} disabled />
          }</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
