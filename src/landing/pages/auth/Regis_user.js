import React from "react";

import { Grid, Form, Segment, Button, Header, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './registerLogin.css';
// import customStyles from 'semantic-ui-css/semantic.min.css';
import logo_pemimpin from '../../../image/Logo.png';
import axios from 'axios';
import config from '../../../config';

const initialState = {
    username: "",
    email: "",
    phone: "",
    university: "",
    errors: [],
    loading: false,
    submit: false
}

class RegisUser extends React.Component {
  state = initialState

  dispalyErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleUserInput = input => {
    this.setState({ [input.target.name]: input.target.value });
    console.log(this.state.email + " " + this.state.password)
  };

  formisValid = ({ username, email, phone, university }) => username && email && phone && university;

  handleSubmit = input => {
    input.preventDefault();
    const formData = new FormData();
    const password_generator = require('generate-password');
 
    const password = password_generator.generate({
        length: 10,
        numbers: true
    });
    
    // 'uEyMTw32v9'
    console.log(password);

    if (this.formisValid(this.state)) {
        this.setState({ errors: [], loading: true });
        formData.set('username', this.state.username)
        formData.set('email', this.state.email)
        formData.set('phone', this.state.phone)
        formData.set('university', this.state.university)
        // Set the password from generated password
        formData.set('password', password)

        axios({
            method: 'POST',
            url: config.endpoint + '/api/v1/all_users',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then( user => {

            this.setState({ 
            initialState,
            submit: true
            });
            this.setState({ loading: false});
            console.log('User Registed', user)
            if (this.state.submit) {
                return <Redirect to='/about' />
            }
            
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
    const { username, email, phone, university, errors, loading } = this.state;

    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle" className="registerlogin">
            <Grid.Column style={{ maxWidth: 450 }}>
                <img src={logo_pemimpin} alt="Pemimpin.co" className="logogram"/>
                    <Header as="h1" icon color="black" textAlign="center" 
                    style={{marginBottom:"20px", marginTop:"10px"}}>
                        Masukan data dirimu dibawah
                    </Header>

                    {/* Form for Login */}
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name="username"
                                value={username}
                                icon="person"
                                iconPosition="left"
                                placeholder="Nama-mu"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'username')}
                                type="username"
                            />
                            <Form.Input
                                fluid
                                name="email"
                                value={email}
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email-mu"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'email')}
                                type="email"
                            />

                            <Form.Input
                                fluid
                                name="phone"
                                value={phone}
                                icon="phone"
                                iconPosition="left"
                                placeholder="Nomor Hp (Whatsapp)"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'phone')}
                                type="phone"
                            />

                            <Form.Input
                                fluid
                                name="university"
                                value={university}
                                icon="university"
                                iconPosition="left"
                                placeholder="Nama Universitas"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'university')}
                                type="university"
                            />

                            <Button
                                disabled={loading}
                                className={loading ? 'loading' : ''}
                                style={{background:"#e6133d", color:"#fff"}}
                                fluid
                                size="medium">
                                Daftarkan Saya!
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
                        Bukan Peserta? login ke <Link to="/login/admin">Dashboard Admin</Link> | <Link to="/login/user">User</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
        );
  }
}

export default RegisUser;