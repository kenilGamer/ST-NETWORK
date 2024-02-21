/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Singup from './components/Singup'

function App() {
  return (
    <div className='w-full h-screen'> 
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/signup' element= {<Singup />}/>
      </Routes>
    </div>
  )
}

export default App