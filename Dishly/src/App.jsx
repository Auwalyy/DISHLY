import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'
import './App.css'
import Copy from './components/Copy'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Footer />
      <Copy />
    </div>
  )
}

export default App