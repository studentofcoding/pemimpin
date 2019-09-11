import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

import customStyles from 'semantic-ui-css/semantic.min.css';
import './Contact.css';
import './Pages.css';

import { Form, Input, TextArea, Message, Container } from 'semantic-ui-react';
import Footer from '../../components/Footer';
// import Tncmodul from '../../components/Tncmodul';


import axios from 'axios';
import RegisterModul from '../../components/Registermodul';
// import config from '../config';

const contactState = { 
  username: "",
  email: "",
  phone: "",
  university: "",
  question: "",
  errors: [],
  loading: false,
  submit: false
};

class Contact extends Component {
  state = contactState;

  dispalyErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    this.setState({ loading: true});

    axios.post(
      "https://formcarry.com/s/2SRW1H-nRZs", 
      this.state, 
      {headers: {"Accept": "application/json"}}
      ).then((response) => {
      // TODO, show to user that request is success
      this.setState({ ...contactState, submit:true });
      console.log(response);
      this.setState({ loading: false});
      setTimeout(() => this.setState({submit:false}), 3000);
      console.log('question sended')
    }).catch((response) => {
      // TODO, show to user that request is failed
      this.setState({errors:[response]})
      this.setState({ loading: false});
      console.log('question error', response)
    });

    e.preventDefault();
  }

  handleInputError = (errors, inputName) => {
    return errors.some(error =>
        error.message.toLowerCase().includes(inputName)
    )
        ? 'error'
        : '';
  };

  render() {
    const { username, email, phone, question, university, loading, submit, errors } = this.state;

    return (
      <div className="web-container">
        <Navbar />
        
        <RegisterModul />
        
        {/* Pages Header */}
        <div className="pages-header">
          <div className="pages-header_header">
            <div className="pages-header_content">
              Contact Us
            </div>
          </div>
        </div>
        <div style={customStyles}>
          {/* <div className="contact_container"> */}
          <Container text style={{ marginBottom: '5em', marginTop: '1em' }}>

            <Form unstackable onSubmit={this.handleSubmit}>
              {/* Form for Contact */}
              <Form.Group widths="equal">
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
              </Form.Group>

              <Form.Group widths="equal">
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

                <Form.Field
                  fluid
                  name="phone"
                  control={Input}
                  label='Nomor Whatsapp'
                  value={phone}
                  placeholder='Jika kamu ingin dihubungi via whatsapp'
                  type="number"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field
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
              disabled={loading}
              className={loading ? 'loading' : ''}
              >
                {loading ? 'Mengirim Pertanyaanmu ke Server...' : 'Kirim Pertanyaan'}
              </Form.Button>
            </Form>
              {errors.length > 0 && (
                <Message error>
                    <h3>Error</h3>
                    {this.dispalyErrors(errors)}
                </Message>
              )}
              {errors.length < 1 && submit === true && (
                <Message
                  success
                  header='Pertanyaan kamu telah kami terima Leader!'
                  content='Kami akan menghubungimu secepatnya.'
                />
              )}
          </Container>
          {/* </div> */}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;