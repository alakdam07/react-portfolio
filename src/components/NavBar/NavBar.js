import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
render() {
    return (
      <div className="NavBar">
        <header>
          <div className="nav-container">
              <nav className="nav-checkbox">
                <a href="/" className="logo">logo</a>
                <input id="tab-nav" type="checkbox" className="tab-nav"/>
                
                  <ul className="tab-content">
                    <li><NavLink to="/">home</NavLink></li>
                   
                    
                    <li><NavLink to="/activities">about me</NavLink></li>
                   
                  </ul>
              </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
