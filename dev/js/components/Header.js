import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <div className="header-row">
             <Link to='/'><button className="header-link">Home</button></Link>
             <Link to='/about-us'><button className="header-link">About Us</button></Link>
             <Link to='/devices'><button className="header-link">Devices</button></Link>
        </div>
    </header>
)

export default Header