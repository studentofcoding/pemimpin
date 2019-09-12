import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

// T&C Modal
import Modal from 'react-modal';
// import { NavLink } from 'react-router-dom';
import './tncModul.css';
import RegisUser from '../pages/auth/Regis_user';

let Registermodul = Modal;

let registerStyles = {
  content : {
    padding     : '0px',
    height      : '100%',
    width       : 'auto'
  }
};
Registermodul.setAppElement('#root');

class RegisterModul extends Component {
  constructor(props){
    // const [modalShow, setModalShow] = useState(false);
    super(props);
    this.state={
      isModulOpen: false,
      isModulChecked: false,
      isRegisterButtonOpen: true
    };
    this.toggleRegisterChecklist = this.toggleRegisterChecklist.bind(this);
    this.openRegisterModul = this.openRegisterModul.bind(this);
    this.afterModulOpen = this.afterModulOpen.bind(this);
    this.closeRegisterModul = this.closeRegisterModul.bind(this);
  }

  toggleRegisterChecklist(){
    this.setState(state=> ({
      isModulChecked: !state.isModulChecked
    }))
  }

  /*
    T&C Modal Related
  */

 openRegisterModul () {
  this.setState({
    isModulOpen: true,
    isRegisterButtonOpen: false
  });
}

afterModulOpen() {
  // references are now sync'd and can be accessed.
  // this.modul_header.style.color = '#1d1d2c';
  // this.modul_header.style.marginTop = '-40px';
  // this.modul_header.style.borderBottom = 'solid #1d1d2c6b 0.5px';
  // this.modul_header.style.paddingTop = '40px';
  // this.modul_header.style.paddingBottom = '20px';
  // this.modul_header.style.position = 'sticky';
  // this.modul_header.style.top = '-50px';
  // this.modul_header.style.backgroundColor = 'white';

  // this.modul_checklist.style.display = 'flex';
  // this.modul_checklist.style.justifyContent = 'space-between';
  // this.modul_checklist.style.flexFlow = 'row';
  // this.modul_checklist.style.paddingTop = '10px';
  // this.modul_checklist.style.paddingBottom = '80px';
  // this.modul_checklist.style.position = 'sticky';
  // this.modul_checklist.style.bottom = '-80px';
  // this.modul_checklist.style.marginBottom = '-80px';
  // this.modul_checklist.style.backgroundColor = 'white';
}

closeRegisterModul() {
  this.setState({
    isModulOpen: false,
    isRegisterButtonOpen: true
  });
}

// handleHideButton_TnC () {
//   this.setState({
//     isModulOpen: true,
//     isRegisterButtonOpen: false
//   });
// }

  render() {
    console.log(this.state,"currentState");
    const { isRegisterButtonOpen } = this.state;

    return (
      <div>
      { 
        isRegisterButtonOpen === true
        ? 
        <Button
        style={{
          position: "fixed",
          margin: "2em",
          animation: "floating 1.5s ease-in-out infinite",
          bottom: 0,
          right: 0,
        }}
        color='red'
        className="Button-Daftar"
        onClick={this.openRegisterModul}
        content='Daftar Sekarang'
        />
        : ''
      }
        
        {/* Term and Condition Section */}
        <Registermodul
          isOpen={this.state.isModulOpen}
          onAfterOpen={this.afterModulOpen}
          onRequestClose={this.closeRegisterModul}
          style={registerStyles}
          contentLabel="Term and Conditions"
        >
          <div className="TnC_container-outer">
            <div className="TnC_container-inner">
              <div className="TnC-container_body">
                <RegisUser />
              </div>
            </div>
          </div>
        </Registermodul>
      </div>
    );
  }
}

export default RegisterModul;