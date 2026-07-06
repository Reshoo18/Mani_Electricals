import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from './About'
import Services from './Services'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
  <About/>
  <Services/>
   </>
  )
}

export default Home
