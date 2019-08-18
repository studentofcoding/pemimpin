import React, { Component } from 'react';

import Login from './landing/pages/auth/Login';
import Contact from './landing/pages/general/Contact';
import Home from './landing/pages/general/Home';

// import nothinghere from './components/nothinghere';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './landing/pages/general/About';
import Formregister from './landing/components/Formregister';
// import Formregisterhook from './components/Hook';
import TnCPage from './landing/pages/general/T&C';
// import '../semantic/dist/semantic.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tnc" component={TnCPage} />
            <Route exact path="/form" component={Formregister} />
            {/* <Route exact path="/hook" component={Formregisterhook} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

// const AppWithAuth = withRouter(App);

export default App;
