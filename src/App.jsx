/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className='w-full h-screen'> 
      <Routes>
        <Route path='/' element= {<Home />}/>
      </Routes>
    </div>
  )
}

export default App