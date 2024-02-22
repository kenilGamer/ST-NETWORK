/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";

function Hero4() {
  const [data, setData] = useState([
    {
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/"
    },
    {
      icon: <AiFillYoutube />,
      link: "https://www.youtube.com"
    },
    {
      icon: <IoLogoDiscord />,
      link: "https://discord.gg/zd65pdAEWs"
    },
    {
      icon: <TiSocialTwitter />,
      link: "https://twitter.com/BSC_Army"
    },
    {
      icon: " ", customClass: "custom-class" // space is used to separate the items 
    }
  ]);

  return (
    <div className='relative w-full h-full st1 text flex items-center justify-between nav1 px-5' >
      <div>
        <h1 className='st text-3xl'>stnetwork</h1>
      </div>
      <div>&copy; 2024 stnetwork  All rights reserved.</div>
      <div className='flex gap-10 p-2'>
        {data.map((items, index) => (
          <a className={`text-3xl`} key={index} href={items.link} target="_blank" rel="noopener noreferrer">{items.icon}</a>
        ))}
      </div>
    </div>
  );
}

export default Hero4;
