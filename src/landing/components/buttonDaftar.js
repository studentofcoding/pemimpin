import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import TandCModul from './Tncmodul';
import './buttonDaftar.css';

export default class buttonDaftar extends Component {
  render() {
    return (
      <div>
        <Button className="Button-Daftar" onClick={TandCModul} content='Daftar Sekarang' primary />
      </div>
    )
  }
}

