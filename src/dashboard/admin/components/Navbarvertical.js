import React, { useState } from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import logo_pemimpin from '../../../image/Logo.png';
import Navbarcss from './Navbarvertical.css';

const initialState = {
  selected_status: false,
  activeMenu: 'Dashboard'
 };

const Navbarvertical = () => {
  const [ state, setState ] = useState(initialState);

  const handleItemClick = (e, { name }) => setState({ ...state, activeItem: name })

  const { activeItem } = state;

  return (
    <div className="sidebar-sticky">
      <div className="logo-container_container">
        <a href="http://www.fellowship.pemimpin.id">
          <img src={logo_pemimpin} alt="Pemimpin.co" className="app-logo-sidebar"/>
        </a>
        {/* <NavLink exact to="pemimpin.id">
        </NavLink> */}
      </div>

      <Divider/>

      <Menu pointing secondary inverted sticky vertical>
        <Menu.Item
          name='Dashboard'
          active={activeItem === 'Dashboard'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Selected User'
          active={activeItem === 'Selected User'}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  )
}

export default Navbarvertical;