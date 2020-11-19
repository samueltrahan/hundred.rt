import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-menu">
        <a className="menu" href="/sidebar"><i className="fas fa-bars fa-3x"></i></a>
      </div>
      <div className="nav-logo">
        <img className="logo" alt="" src="/images/hundred.png"></img>
      </div>
    </nav>
  )
}

