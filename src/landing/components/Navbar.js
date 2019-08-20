import React, { useState } from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

import logo_pemimpin from '../../image/Logo.png';
import { Button, Dimmer, Menu } from 'semantic-ui-react';

const initialState = {
  active: false, 
  activePage:''
}

function Navbar() {
  const [ state, setState ] = useState(initialState);

  const menuOpen = () => setState({ ...state, active: true })
  const menuClose = () => setState({ ...state, active: false })
  const handleItemClick = (e, { name }) => {
    setState({ ...state, activePage: name })
  }

  const { active, activePage } = state

  return (
    <header className="navigation-container_grid">
      <div className="logo-container">
        <div className="logo-container_container">
          <a href="http://www.pemimpin.id">
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
          <Button icon='align justify' inverted color='red' onClick={menuOpen} />
            <Dimmer active={active} onClickOutside={menuClose} page>
              <Menu size='massive' inverted secondary vertical>
              <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='Home'
                  active={activePage === 'home'}
                  onClick={handleItemClick}
                  exact to='/'
                />
                <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='About'
                  active={activePage === 'about'}
                  onClick={handleItemClick}
                  exact to='/about'
                />
                <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='Term and Condition'
                  active={activePage === 'tnc'}
                  onClick={handleItemClick}
                  exact to='/tnc'
                />
                <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='Contact'
                  active={activePage === 'contact'}
                  onClick={handleItemClick}
                  exact to='/contact'
                />
                <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='Login'
                  active={activePage === 'login'}
                  onClick={handleItemClick}
                  exact to='/login'
                />
              </Menu>
            </Dimmer>
          </div>
        </div>
    </header>
  );
}

export default Navbar;