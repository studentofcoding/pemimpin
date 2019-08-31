import React from "react";

import { Grid, Form, Segment, Button, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './registerLogin.css';
import customStyles from 'semantic-ui-css/semantic.min.css';
import logo_pemimpin from '../../../image/Logo.png';
import axios from 'axios';
import config from '../../../config';

const initialState = {
    email: "",
    password: "",
    errors: [],
    loading: false,
    submit: false
}

class Login extends React.Component {
  state = initialState

  dispalyErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleUserInput = input => {
    this.setState({ [input.target.name]: input.target.value });
    console.log(this.state.email + " " + this.state.password)
  };

  formisValid = ({ email, password }) => email && password;

  handleSubmit = input => {
    this.setState({ loading: true });
    input.preventDefault();

    if (this.formisValid(this.state)) {
      this.setState({ errors: [], loading: true });
      axios({
        method: 'POST',
        url: config.endpoint + '/api/v1/admin',
        data: JSON.stringify({
          email    : this.state.email,
          password : this.state.password
        }),
        config: {
          headers: { 
            'Content-Type': 'application/json' 
          }
        } 
      }).then( user => {

        this.setState({ 
          initialState,
          submit: true
        });
        this.setState({ loading: false});
        console.log('User Login', user)
        this.props.history.push('/');
        
      }).catch((response) => {
        // ? Show to user that request is failed
        this.setState({ errors:[response ]})
        this.setState({ loading: false });
        console.log('request failed', response)
      });
    }
  };

  handleInputError = (errors, inputName) => {
      return errors.some(error =>
          error.message.toLowerCase().includes(inputName)
      )
          ? 'error'
          : '';
  };

  render() {
    console.log(this.state,"currentState");
    const { email, password, errors, loading } = this.state;

    return (
        <div style={customStyles}>
            <Grid textAlign="center" verticalAlign="middle" className="registerlogin">
            <Grid.Column style={{ maxWidth: 450 }}>
                <img src={logo_pemimpin} alt="Pemimpin.co" className="logogram"/>
                    <Header as="h1" icon color="black" textAlign="center" 
                    style={{marginBottom:"20px", marginTop:"10px"}}>
                        Login to Pemimpin.id
                    </Header>

                    {/* Form for Login */}
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name="email"
                                value={email}
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email Address"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'email')}
                                type="email"
                            />

                            <Form.Input
                                fluid
                                name="password"
                                value={password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'password')}
                                type="password"
                            />

                            <Button
                                disabled={loading}
                                className={loading ? 'loading' : ''}
                                style={{background:"#e6133d", color:"#fff"}}
                                fluid
                                size="medium">
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.dispalyErrors(errors)}
                        </Message>
                    )}
                    <Message style={{fontSize:"14px"}}>
                        Klik disini untuk kembali ke <Link to="/">Home</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
        );
  }
}

export default Login;