import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={isOpen ? 'open' : ''}>
        <li className='network'>Network</li>
        <li>How it works</li>
        <li><button className='btn'>Join the Network</button></li>
      </ul>
      <div className='hamburger' onClick={toggleMenu}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
    </nav>
  );
}

export default Navbar;
