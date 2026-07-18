import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from './About'
import Services from './Services'
import Product from './Product'
import WhyChoose from './WhyChoose'
import Contact from './Contact'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
  <About/>
  <Services/>
  <Product/>
  <WhyChoose/>
  <Contact/>
   </>
  )
}

export default Home
