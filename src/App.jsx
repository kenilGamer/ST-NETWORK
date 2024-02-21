/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Singup from './components/Singup'
import Login from './components/Login'

function App() {
  return (
    <div className='w-full h-screen bg-sky-400'> 
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/signup' element= {<Singup />}/>
        <Route path='/login' element= {<Login />}/>
      </Routes>
    </div>
  )
}

export default App