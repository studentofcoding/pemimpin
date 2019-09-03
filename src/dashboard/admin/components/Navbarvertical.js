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
  )
}

export default Navbarvertical;