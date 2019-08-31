import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const initialState = {
  selected_status: false,
  activeMenu: 'Dashboard'
 };

const Navbarvertical = () => {
  const [ state, setState ] = useState(initialState);

  const handleItemClick = (e, { name }) => setState({ ...state, activeItem: name })

  const { activeItem } = state;

  return (
    <Menu secondary vertical>
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
      {/* <Dropdown item text='Display Options'>
        <Dropdown.Menu>
          <Dropdown.Header>Text Size</Dropdown.Header>
          <Dropdown.Item>Small</Dropdown.Item>
          <Dropdown.Item>Medium</Dropdown.Item>
          <Dropdown.Item>Large</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </Menu>
  )
}

export default Navbarvertical;