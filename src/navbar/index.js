import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

import "./index.css";

class Navbar extends Component {
  constructor() {
    super();
  }

  toggleMenu() {
    document.getElementById('nav').classList.toggle("open");
  }

  render() {
    return (
      <div className="navbar">
        <div id="navIcon" onClick={() => {this.toggleMenu()}}>
          ☰
        </div>
        <ul className="nav" id="nav">
          <li><a href="https://kohzmay.github.io/geo250/">June 29, 2012</a></li>
          <li><a href="https://kohzmay.github.io/geo250/about-derechos">About Derechos</a></li>
          <li><a href="https://kohzmay.github.io/geo250/resources">Resources</a></li>
        </ul>
      </div>
    );
  }

}

export default Navbar;
