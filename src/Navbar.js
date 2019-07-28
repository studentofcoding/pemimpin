import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <header className="navbar">
        <div className="logo-container">
          <NavLink exact to="/">
            <img
              className="app-logo"
              src="images/logo.png"
              alt="titiktemu"
            />
          </NavLink>
        </div>
        {/*This is the function to Show the Menu Page*/}
        <div className="menu-navbar">
          <a href="/">
            <NavLink activeClassName="active-navlink-home" exact to="/">About</NavLink>
          </a>
          <a href="/">
            <NavLink activeClassName="active-navlink-chat" exact to="/chat">Term & Condition</NavLink>
          </a>
          <a href="/">
            <NavLink activeClassName="active-navlink-chat" exact to="/chat">Contact</NavLink>
          </a>
          <a href="/chat">
            <NavLink activeClassName="active-navlink-chat" exact to="/chat">Login</NavLink>
          </a>
          <div className="signout">
        </div>
        </div>
      </header>
    );
  }
}

export default Navbar;