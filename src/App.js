import React, { Component } from 'react';

import Login from './pages/Auth/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';

// import nothinghere from './components/nothinghere';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Formregister from './components/Formregister';
import TnCPage from './pages/T&C';
// import '../semantic/dist/semantic.min.css';

class App extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.props.history.push('/');
  //     }
  //   })
  // }

  render() {
    return (
      <Router>
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/kontak" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tnc" component={TnCPage} />
            <Route exact path="/form" component={Formregister} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// const AppWithAuth = withRouter(App);

export default App;
