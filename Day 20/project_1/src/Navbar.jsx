import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
        <li>
            <Link to="/service">Services</Link>
        </li>
        <li>
            <Link to="/welcome">Welcome</Link>
        </li>
    </ul>
    </>
  );
}

export default Navbar;