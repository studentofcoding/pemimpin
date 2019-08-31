import React from 'react';
import semanticStyle from 'semantic-ui-css/semantic.min.css';
import '../../App.css';

import { Container, Grid } from 'semantic-ui-react';
import Navbarvertical from './components/Navbarvertical';
import CandidateList from '../general/components/candidateList';

function Dashboard() {
  return (
    <div className="web-container">
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Navbarvertical />
          </Grid.Column>
          <Grid.Column width={12}>
            <div style={semanticStyle}>
              <Container style={{margin:"1em"}}>
                <CandidateList />
              </Container>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;