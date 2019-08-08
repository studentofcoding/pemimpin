import React, { Component } from 'react'
import axios from 'axios';
const API_URL = 'http://localhost:3000';

export default class apiCall extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    const url = `${API_URL}/api/v1/universities`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ data: data })
      console.log(this.state.data)
     });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
