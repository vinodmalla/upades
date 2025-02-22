import React from 'react'
import { Link } from 'react-router-dom'

import "./App.css";

function Header() {
  return (
    <div className='nav-items'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/experience">Work Experence</Link></li>
            <li><Link to="/certificates">Certifications</Link></li>
            <li><Link to="/languages">Laguages</Link></li>
            <li><Link to="/acdamics">Acadamics</Link></li>
            <li><Link to="/contact">Contacts</Link></li>


        </ul>
       
      
    </div>
  )
}

export default Header
