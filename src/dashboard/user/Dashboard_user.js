import React from 'react';
// import semanticStyle from 'semantic-ui-css/semantic.min.css';
import '../../App.css';

import { Container } from 'semantic-ui-react';
import { useEffect } from 'react';
import Navbarvertical from './components/Navbarvertical_user';
import CandidateList from '../general/components/candidateList';

const initialState = {
  token: null,
  isUserAuth: false
}

function Dashboard(props) {
  const [ state, setState ] = React.useState(initialState);
  const { token, isUserAuth } = state;

  const redirect = () => {
    //
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
      <Navbarvertical />
      <div className="main-container">
        <div className="head_dashboard">
          <Container>
            <CandidateList />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;