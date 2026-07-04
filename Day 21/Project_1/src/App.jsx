import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import CauseHouse from './CauseHouse'
import Service from './Service'
import About from './About'
import WhoweServe from './WhoweServe'
import CaseStudies from './CaseStudies'
import Resources from './Resources'
import WorkwithUs from './WorkwithUs'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CauseHouse/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/whoweserve" element={<WhoweServe />}  />
      <Route path="/casestudies" element={<CaseStudies/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="workwithus" element={<WorkwithUs/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App