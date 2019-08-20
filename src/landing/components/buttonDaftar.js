import React from 'react';
import { Button } from 'semantic-ui-react';
import TandCModul from './Tncmodul';
import './buttonDaftar.css';

function buttonDaftar() {
  return (
    <div>
      <Button className="Button-Daftar" onClick={TandCModul} content='Daftar Sekarang' primary />
    </div>
  )
}

export default buttonDaftar;

