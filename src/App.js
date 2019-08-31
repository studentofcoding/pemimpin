import React, { Component } from 'react';

import Login from './landing/pages/auth/Login';
import Contact from './landing/pages/general/Contact';
import Home from './landing/pages/general/Home';

// import nothinghere from './components/nothinghere';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './landing/pages/general/About';
import Formregister from './landing/components/Formregister';
import TnCPage from './landing/pages/general/T&C';
// import '../semantic/dist/semantic.min.css';

import ReactGA from 'react-ga';
import Dashboard from './dashboard/admin/Dashboard';
ReactGA.initialize('UA-48910414-11');
ReactGA.pageview('/');
ReactGA.pageview('/about');
ReactGA.pageview('/contact');
ReactGA.pageview('/form');
ReactGA.pageview('/tnc');
ReactGA.pageview('/login');

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" component={Formregister} />
            <Route exact path="/tnc" component={TnCPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            {/* <Route exact path="/hook" component={Formregisterhook} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

// const AppWithAuth = withRouter(App);

export default App;
