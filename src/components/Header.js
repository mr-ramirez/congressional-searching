import React, { Component } from 'react';

import './styles/Header.css';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="Header_container">
        <img src={logo} className="Header_logo" alt="logo" />
        <h1 className="Header_title">React Programming Exercise</h1>
      </header>
    );
  }
}

export default Header
