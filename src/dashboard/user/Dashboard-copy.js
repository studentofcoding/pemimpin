import React from 'react';
// import semanticStyle from 'semantic-ui-css/semantic.min.css';
import '../../App.css';

import { Container } from 'semantic-ui-react';
import Navbarvertical from '../admin/components/Navbarvertical';
import CandidateList from '../general/components/candidateList';

function Dashboard() {
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