import React from 'react';
import semanticStyle from 'semantic-ui-css/semantic.min.css';
import '../../App.css';

import { Container } from 'semantic-ui-react';
import Navbarvertical from './components/Navbarvertical';
import CandidateList from '../general/components/candidateList';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-sticky">
        <Navbarvertical />
      </div>
      <Container style={{padding:"1em", width: "80%"}}>
        <div style={semanticStyle}>
            <CandidateList />
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;