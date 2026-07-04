import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul>
      <li className="CH">
        <Link to="/" ><img src="https://www.causehouse.co/_next/image?url=%2Fimages%2Flogos%2Fnavbar_logo.webp&w=384&q=75&dpl=dpl_4V7RWRktvRWHsv28s5RRVDT4PcCi" alt="" /></Link>
         </li>
      <li>
        <Link to="/services" >Service</Link>
      </li>
      <li>
        <Link to="/about" > About</Link>
      </li>
      <li>
        <Link to="/whoweserve" >WhoweServe</Link>
      </li>
      <li>
        <Link to="/casestudies" >CaseStudies</Link>
      </li>
      <li>
        <Link to="resources" >Resources</Link>
      </li>
      <li>

    <button className="WWU rounded-full inline-flex h-14  min-h-[44px] items-center justify-center rounded-[var(--radius-pill)]   text-center text-label text-[var(--bg)] shadow-[4px_4px_0_0_rgba(29,43,31,0.35)] transition-[transform,box-shadow] hover:bg-[color-mix(in_srgb,var(--text)_92%,var(--bg))] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]">
      <Link to="workwithus" >WorkwithUs</Link>
    </button>
      </li>
    </ul>
    </>
  )
}

export default Navbar