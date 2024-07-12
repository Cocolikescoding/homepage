import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Howitworks from './components/Howitworks/Howitworks'
import Feature from './components/Features/Feature'
import Why from './components/Why/Why'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Howitworks/>
      <Feature/>
      <Why/>
    </div>
  )
}

export default App
