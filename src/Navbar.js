import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

import logo_pemimpin from '../src/image/Logo.png';

class Navbar extends Component {

  render() {
    return (
      <header className="navigation-container_grid">
        <div className="logo-container">
          <div className="logo-container_container">
            <NavLink exact to="/">
              <img src={logo_pemimpin} alt="Pemimpin.co" className="app-logo"/>
            </NavLink>
          </div>
        </div>
        {/*This is the function to Show the Menu Page*/}
        {/* <div className="navigation-container">
          <div className="menu_container">
            <div className="navigation_item">About</div>
            <div className="navigation_item">Term & Condition</div>
            <div className="navigation_item">Contact</div>
            <div className="navigation_item">Login</div>
          </div>
        </div> */}
          <div className="menu_container">
            <NavLink className="navigation_item" exact to="/about">About</NavLink>
            <NavLink className="navigation_item" exact to="/tnc">Term & Condition</NavLink>
            <NavLink className="navigation_item" exact to="/contact">Contact</NavLink>
            <NavLink className="navigation_item" exact to="/login">Login</NavLink>
          </div>
      </header>

    //   {/* Navigation Section */}
    //   <header className="navigation-container_grid">
    //   <div className="logo-container">
    //     <div className="logo-container_container">
    //       <img src={logo_pemimpin} alt="Pemimpin.co" className="app-logo"/>
    //     </div>
    //   </div>
    //   <div className="navigation-container">
    //     <div className="menu_container">
    //       <div className="navigation_item">About</div>
    //       <div className="navigation_item">Term & Condition</div>
    //       <div className="navigation_item">Contact</div>
    //       <div className="navigation_item">Login</div>
    //     </div>
    // //   </div>
    // </header>
    );
  }
}

export default Navbar;