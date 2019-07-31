import React, { Component } from 'react';
import Navbar from '../Navbar';

import customStyles from 'semantic-ui-css/semantic.min.css';
import './Contact.css';

import { Form, Input, TextArea, Message } from 'semantic-ui-react';

class Contact extends Component {
  state = { 
    username: "",
    email: "",
    university: "",
    question: "",
    submittedName: "",
    submittedEmail: "",
    submittedUniversity: "",
    submittedQuestion: "",
    errors: [],
    loading: false,
   };

  dispalyErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);

  // handleUserInput = input => {
  //   this.setState({ [
  //     input.target.name
  //   ]: input.target.value });
  // };

  handleChange = (e, { name, value }) => this.setState({ [name]: value});

  handleSubmit = () => {
    const { username, email, university, question } = this.state

    this.setState({ 
      username: "",
      email: "",
      university: "",
      question: "",
      submittedName: username, 
      submittedEmail: email,
      submittedUniversity: university,
      submittedQuestion: question
     })
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

    // const { username, email, question, university, 
    //   submittedName, submittedEmail, submittedQuestion, submittedUniversity, loading, errors } = this.state;

    return (
      <div style={customStyles}>
        <Navbar />
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
                {/* <Button
                    disabled={loading}
                    className={loading ? 'loading' : ''}
                    style={{background:"#E43F35", color:"#fff"}}
                    fluid
                    size="medium">
                    Login
                </Button> */}
          {/* <Message style={{fontSize:"14px"}}>
              Don't have an account? <Link to="/register">Join here!</Link>
          </Message> */}
            <Form.Button 
            style={{background:"#E43F35", color:"#fff"}} 
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
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ username, email, university, question }, null, 4)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail, submittedQuestion, submittedUniversity }, null, 4)}</pre> */}
        {/* </Grid>
        <Grid textAlign="center" verticalAlign="middle" className="registerlogin"> */}
      </div>
    );
  }
}

export default Contact;