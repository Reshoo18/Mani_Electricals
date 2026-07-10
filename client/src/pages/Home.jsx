import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from './About'
import Services from './Services'
import Product from './Product'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
  <About/>
  <Services/>
  <Product/>
   </>
  )
}

export default Home
