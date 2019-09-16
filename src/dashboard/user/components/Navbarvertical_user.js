import React, { useState } from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import logo_pemimpin from '../../../image/Logo.png';
import './Navbarvertical_user.css';

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
        <a href="http://localhost:3000/user/dashboard">
          <img src={logo_pemimpin} alt="Pemimpin.id" className="app-logo-sidebar"/>
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
          name='Isi form pendafaran'
          active={activeItem === 'Isi form pendaftaran'}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  )
}

export default Navbarvertical;