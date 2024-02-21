/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import { FcApproval } from "react-icons/fc";
function Singup() {
  return (
    <div className='w-full h-screen flex items-center text-white justify-center'>
      <div className='object-cover'>
      <img src="/src/assets/login.jpg" className='w-[100vw] h-[100vh] left-0 -top-0 fixed  ' alt="" />
      </div>
      <div className='w-96 h-[70vh] flex items-center hero2text z-10 signup justify-center flex-col gap-10'>
        <h1 className='text-5xl font-bold st1 text-white '>Sign Up</h1>
        <form className='flex flex-col items-center  gap-7 w-72 p-4 rounded-md'>
          <input className='w-full rounded-md p-2' required type="text" placeholder='User Name' />
          <input className='w-full rounded-md p-2' required type="text" placeholder='Full Name' />
          <input className='w-full rounded-md p-2' required type="email" placeholder='Email Address' />
          <input className='w-full rounded-md p-2' required type="password" placeholder='Password' />
          <div className='flex gap-5 max-md:gap-0 '>
          <button type='submit'><Button title={"sign up"}/></button>
          <h1 className='flex items-center'>or</h1>
          <a href='/login'><Button title={"Login"}/></a>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Singup