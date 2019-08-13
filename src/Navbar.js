import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

import logo_pemimpin from '../src/image/Logo.png';
import { Button, Dimmer, Menu } from 'semantic-ui-react';

class Navbar extends Component {
  state = {
    activePage: ''
  }

  menuOpen = () => this.setState({ active: true })
  menuClose = () => this.setState({ active: false })
  handleItemClick = (e, { name }) => {
    this.setState({ activePage: name })
  }

  render() {
    const { active, activePage } = this.state

    return (
      <header className="navigation-container_grid">
        <div className="logo-container">
          <div className="logo-container_container">
            <a href="www.pemimpin.id">
              <img src={logo_pemimpin} alt="Pemimpin.co" className="app-logo"/>
            </a>
            {/* <NavLink exact to="pemimpin.id">
            </NavLink> */}
          </div>
        </div>
        {/*This is the function to Show the Menu Page*/}
          <div className="menu_container">
            <NavLink className="navigation_item" exact to="/">Home</NavLink>
            <NavLink className="navigation_item" exact to="/about">About</NavLink>
            <NavLink className="navigation_item" exact to="/tnc">Term</NavLink>
            <NavLink className="navigation_item" exact to="/contact">Contact</NavLink>
            <NavLink className="navigation_item" exact to="/login">Login</NavLink>
            <div className="menu_button">
            <Button icon='align justify' inverted color='red' onClick={this.menuOpen} />
              <Dimmer active={active} onClickOutside={this.menuClose} page>
                <Menu size='massive' inverted secondary vertical>
                <Menu.Item
                    className="menu_item"
                    as={NavLink}
                    name='Home'
                    active={activePage === 'home'}
                    onClick={this.handleItemClick}
                    exact to='/'
                  />
                  <Menu.Item
                    className="menu_item"
                    as={NavLink}
                    name='About'
                    active={activePage === 'about'}
                    onClick={this.handleItemClick}
                    exact to='/about'
                  />
                  <Menu.Item
                    className="menu_item"
                    as={NavLink}
                    name='Term and Condition'
                    active={activePage === 'tnc'}
                    onClick={this.handleItemClick}
                    exact to='/tnc'
                  />
                  <Menu.Item
                    className="menu_item"
                    as={NavLink}
                    name='Contact'
                    active={activePage === 'contact'}
                    onClick={this.handleItemClick}
                    exact to='/contact'
                  />
                  <Menu.Item
                    className="menu_item"
                    as={NavLink}
                    name='Login'
                    active={activePage === 'login'}
                    onClick={this.handleItemClick}
                    exact to='/login'
                  />
                </Menu>
              </Dimmer>
            </div>
          </div>
      </header>
    );
  }
}

export default Navbar;