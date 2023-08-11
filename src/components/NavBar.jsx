import React from 'react';
import logo from "../assets/icons/airbnb-logo.svg";

function NavBar() {
  return (
    <>

    <nav>
    <img src={logo} className="App-logo" alt="logo" />
        <ul className='nav--items'>
            <li>About</li>
            <li>Policy</li>
            <li>Contact</li>
        </ul>
    </nav>
    
    
    
    </>
  )
}

export default NavBar