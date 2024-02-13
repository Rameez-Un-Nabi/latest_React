// Header.js
import React from 'react';
import Logoimage from '../Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <img src={Logoimage} alt="logo" />
    <nav>
  <ul>
    <li role="menuitem">Home</li>
    <li role="menuitem">About</li>
    <li role="menuitem">Menu</li>
    <li role="menuitem">Reservations</li>
    <li role="menuitem">Order Online</li>
    <li role="menuitem">Login</li>
  </ul>
</nav>
  </header>
);

export default Header;

