import React, { Component } from 'react';

import Login from './landing/pages/auth/Login';
import LoginUser from './landing/pages/auth/Login_user';
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
import Dashboard_user from './dashboard/user/Dashboard_user';
import setAuthToken from './utils/setAuthToken';
import RegisUser from './landing/pages/auth/Regis_user';

ReactGA.initialize('UA-48910414-11');
ReactGA.pageview('/');
ReactGA.pageview('/about');
ReactGA.pageview('/contact');
ReactGA.pageview('/form');
ReactGA.pageview('/tnc');
ReactGA.pageview('/login/admin');
ReactGA.pageview('/login/user');
ReactGA.pageview('/admin/dashboard');
ReactGA.pageview('/user/dashboard');

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
}

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            {/* Landing - General Route */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" component={Formregister} />
            <Route exact path="/tnc" component={TnCPage} />

            {/* Landing - Auth Route */}
            <Route exact path="/registration" component={RegisUser} />
            <Route exact path="/login/admin" component={Login} />
            <Route exact path="/login/user" component={LoginUser} />

            { isUserAuth 
            ? <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
            : <Redirect to='/' />
            }
            
            {/* Dashboard - Protected Route */}
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/user/dashboard" component={Dashboard_user} />
            {/* <Route exact path="/hook" component={Formregisterhook} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

// const AppWithAuth = withRouter(App);

export default App;
