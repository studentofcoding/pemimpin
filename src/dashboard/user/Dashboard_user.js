import React from 'react';
import '../../App.css';

import { Container } from 'semantic-ui-react';
import { useEffect } from 'react';
import Navbarvertical from './components/Navbarvertical_user';
import { Menu, Divider } from 'semantic-ui-react';
import CandidateList from '../general/components/candidateList';
import { ReactComponent as WelcomeImage } from '../../image/welcome_1.svg';
import logo_pemimpin from '../../image/Logo.png';
import './components/Navbarvertical_user.css';
import Formregister from './components/Formregister';

const initialState = {
  token: null,
  isUserAuth: false,
  selected_status: false,
  activeItem: 'Dashboard'
}

function Dashboard(props) {
  const [ state, setState ] = React.useState(initialState);
  const { token, isUserAuth, activeItem } = state;

  const handleItemClick = (e, { name }) => setState({ ...state, activeItem: name })

  const Navbar = () => {
    return <div className="sidebar-sticky">
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
        name='Form Pendaftaran'
        active={activeItem === 'Form Pendaftaran'}
        onClick={handleItemClick}
      />
    </Menu>
  </div>
  }

  const redirect = () => {
    props.history.push('/login/user');
  }

  // Akan se
  useEffect(() => {
    // Tulis fucntionnya untuk grab header tokennya
    if (token === null) {
      // Tulis functionnya untuk grab header tokennya
      const userToken = () => {   
        return window.localStorage.getItem('jwtToken_user');
        // Harus ada return karena function gunanya untuk mengembalikan sesuatu
        // set token ke state token
        // isUserAuth ganti ke true
      }
      // Memanggil function dari variable (menyimpan value)
      const user = userToken();
      if (user === null) {
        redirect();
      }
      console.log(user)
      setState({ ...state, token: userToken, isUserAuth: true })
    }
  })

  

  if (token === '' | null) { return '' }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="main-container">
        <div className="head_dashboard">
          <Container>
            {/* Open this if Dashboard is selected else Open Formregister */}
            {
              activeItem === 'Dashboard'
              ? <WelcomeImage style={{ fill: "#d10927" }}/>
              : <Formregister />
            }
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;