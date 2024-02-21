/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

function Login() {
  return (
    <div className='w-full h-screen flex items-center text-white justify-center'>
      <div className='object-cover'>
      <img src="/img/login.jpg" className='w-[100vw] h-[100vh] left-0 -top-0 fixed  ' alt="" />
      </div>
      <div className='w-96 h-[70vh] flex items-center hero2text z-10 signup justify-center flex-col gap-10'>
        <h1 className='text-5xl font-bold st1 text-white '>login</h1>
        <form className='flex flex-col items-center  gap-7 w-72 p-4 rounded-md'>
          <input className='w-full rounded-md p-2' type="email" required placeholder='Email Address' />
          <input className='w-full rounded-md p-2' type="password" required placeholder='Password' />
          <div className='flex gap-5 max-md:gap-0 '>
          <button type='submit'><Button title={"login"}/></button>
          <h1 className='flex items-center'>or</h1>
          <a href='/signup'><Button title={"signup"}/></a>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Login