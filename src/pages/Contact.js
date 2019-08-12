import React, { Component } from 'react';
import Navbar from '../Navbar';

import customStyles from 'semantic-ui-css/semantic.min.css';
import './Contact.css';
import './Pages.css';

import { Form, Input, TextArea, Message } from 'semantic-ui-react';
import Footer from '../components/Footer';
import Tncmodul from '../components/Tncmodul';

import axios from 'axios';
import config from '../config';

const contactState = { 
  username: "",
  email: "",
  university: "",
  question: "",
  errors: [],
  loading: false,
  submit: false
};

class Contact extends Component {
  state = contactState;

  dispalyErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (e, { name, value }) => this.setState({ [name]: value});

  handleSubmit = () => {

    const formData = new FormData();
    formData.set('username', this.state.username)
    formData.set('email', this.state.email)
    formData.set('university', this.state.university)
    formData.set('question', this.state.question)

    axios({
      method: 'POST',
      url: config.endpoint + '/api/v1/contact',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then((response) => {
      // TODO, show to user that request is success
      this.setState({...contactState,submit:true});
      console.log('question sended')
    }).catch((response) => {
      // TODO, show to user that request is failed
      this.setState({errors:[response]})
      console.log('question error', response)
    });
  }

  formisValid = ({ username, email, university, question }) => username && email && university && question;

  handleInputError = (errors, inputName) => {
    return errors.some(error =>
        error.message.toLowerCase().includes(inputName)
    )
        ? 'error'
        : '';
  };

  render() {
    const { username, email, question, university, loading, errors } = this.state;

    return (
      <div className="web-container">
        <Navbar />
        
        <Tncmodul />
        
        {/* Pages Header */}
        <div className="pages-header">
          <div className="pages-header_header">
            <div className="pages-header_content">
              Contact Us
            </div>
          </div>
        </div>
        <div style={customStyles}>
          <div className="contact_container">
            <Form unstackable onSubmit={this.handleSubmit}>
              {/* Form for Contact */}
              <Form.Group onSubmit={this.handleSubmit} widths="equal">
                <Form.Field
                    fluid
                    name="username"
                    value={username}
                    control={Input}
                    label='Nama Lengkap'
                    placeholder="Masukan Namamu"
                    onChange={this.handleChange}
                    className={this.handleInputError(errors, 'username')}
                    type="username"
                    required
                />

                <Form.Field
                    fluid
                    name="email"
                    value={email}
                    control={Input}
                    label='Email'
                    placeholder="Masukan Emailmu"
                    onChange={this.handleChange}
                    className={this.handleInputError(errors, 'email')}
                    type="email"
                    required
                />

                <Form.Field
                    fluid
                    name="university"
                    value={university}
                    control={Input}
                    label='Universitas'
                    placeholder="Masukan Universitasmu"
                    onChange={this.handleChange}
                    className={this.handleInputError(errors, 'username')}
                    type="username"
                    required
                />
              </Form.Group>
              <Form.Field
                fluid
                name="question"
                control={TextArea}
                value={question}
                label='Pertanyaan'
                placeholder='Masukan Pertanyaanmu'
                onChange={this.handleChange}
                className={this.handleInputError(errors, 'question')}
                type="question"
                required
              />
                  
              <Form.Button 
              style={{
                background:"#1d1d2c", 
                color:"#fff", 
                marginBottom: "1em", 
                marginTop: "1em",
                width: "100%"
              }}
              size="medium" 
              content='Kirim Pertanyaan'
              disabled={loading}
              className={loading ? 'loading' : ''}
              />
              {errors.length > 0 && (
                <Message error>
                    <h3>Error</h3>
                    {this.dispalyErrors(errors)}
                </Message>
              )}
            </Form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;