import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react';

// T&C Modal
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import './tncModul.css';

var TnCModal = Modal;

const tncStyles = {
  content : {
    padding               : '50px',
  }
};
TnCModal.setAppElement('#root');

class Tncmodul extends Component {
  constructor(props){
    // const [modalShow, setModalShow] = useState(false);
    super(props);
    this.state={
      isHide:true,
      showNotif: true,
      isTnCOpen: false,
      isTncCheck: false,
      isButtonTnCOpen: true
    };
    this.toggleTncCheck = this.toggleTncCheck.bind(this);
    this.handleTnC_Open = this.handleTnC_Open.bind(this);
    this.handleAfterTnC_Open = this.handleAfterTnC_Open.bind(this);
    this.handleTnC_Close = this.handleTnC_Close.bind(this);
  }

  toggleTncCheck(){
    this.setState(state=> ({
      isTncCheck: !state.isTncCheck
    }))
  }

  /*
    T&C Modal Related
  */

 handleTnC_Open () {
  this.setState({
    isTnCOpen: true
  });
}

handleAfterTnC_Open() {
  // references are now sync'd and can be accessed.
  this.tnc_header.style.color = '#1d1d2c';
  this.tnc_header.style.marginTop = '-40px';
  this.tnc_header.style.borderBottom = 'solid #1d1d2c6b 0.5px';
  this.tnc_header.style.paddingTop = '40px';
  this.tnc_header.style.paddingBottom = '20px';
  this.tnc_header.style.position = 'sticky';
  this.tnc_header.style.top = '-50px';
  this.tnc_header.style.backgroundColor = 'white';

  this.tnc_checklist.style.display = 'flex';
  this.tnc_checklist.style.justifyContent = 'space-between';
  this.tnc_checklist.style.flexFlow = 'row';
  this.tnc_checklist.style.paddingTop = '10px';
  this.tnc_checklist.style.paddingBottom = '80px';
  this.tnc_checklist.style.position = 'sticky';
  this.tnc_checklist.style.bottom = '-80px';
  this.tnc_checklist.style.marginBottom = '-80px';
  this.tnc_checklist.style.backgroundColor = 'white';
}

handleTnC_Close () {
  this.setState({
    isTnCOpen: false
  });
}

handleHideButton_TnC () {
  this.setState({
    isTnCOpen: true,
    isButtonTnCOpen: false
  });
}

  render() {
    return (
      <div>
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
        onClick={this.handleTnC_Open}
        content='Daftar Sekarang'
        />
        {/* Term and Condition Section */}
        <TnCModal
          isOpen={this.state.isTnCOpen}
          onAfterOpen={this.handleAfterTnC_Open}
          onRequestClose={this.handleTnC_Close}
          style={tncStyles}
          contentLabel="Term and Conditions"
        >
          <h2 ref={tnc_header => this.tnc_header = tnc_header}>Term and Conditions</h2>
          <div className="TnC_container-outer">
            <div className="TnC_container-inner">
              <div className="TnC-container_header-H1">
                KETENTUAN UMUM
              </div>
              <div className="TnC-container_body">
                <ol>
                  <li className="TnC-container-body_list">
                    Mahasiswa S1 dari universitas di Jabodetabek dan Bandung
                  </li>
                  <li className="TnC-container-body_list">
                    Mahasiswa tingkat akhir yang sedang menyelesaikan skripsi pada tahun 2019-2020
                  </li>
                  <li className="TnC-container-body_list">
                    Inovatif, berkomitmen, persisten, dan bersemangat
                  </li>
                  <li className="TnC-container-body_list">
                    Memiliki kemampuan menganalisa masalah yang baik
                  </li>
                  <li className="TnC-container-body_list">
                    Siap mengikuti program pembinaan selama 9 bulan
                  </li>
                  <li className="TnC-container-body_list">
                    Hak cipta hasil penelitian tetap berada pada peneliti dan kampus, akan tetapi pemimpin.id diberikan hak untuk mempublikasikan sebagian atau seluruh hasil skripsi.
                  </li>
                  <li className="TnC-container-body_list">
                    Pemimpin.id memiliki hak menggunakan hasil penelitian tersebut untuk kepentingan pengembangan ekosistem kepemipinan di Indonesia dengan tetap memperhatikan etika ilmiah dan bebas dari unsur kejahatan akademik.
                  </li>
                  {/* Untuk supaya dipakai Nanti */}
                  {/* <li className="TnC-container-body_list">
                    Jika pernah menerima beasiswa berikut akan diprioritaskan :
                    <ul>
                    <li>Bidik Misi,</li>
                    <li>Rumah Kepemimpinan,</li>
                    <li>Bakti Nusa,</li>
                    <li>Beastudi Etos,</li>
                    <li>Karya Salemba Empat,</li>
                    <li>Kader Surau YBM BRI, dan</li>
                    <li>LAZ Salman.</li>
                    </ul>
                  </li> */}
                  <li className="TnC-container-body_list">
                    Bagi yang pernah mendapatkan beasiswa ataupun alumni program/pelatihan kepemimpinan tingkat nasional akan diutamakan
                  </li>
                </ol>
              </div>

              <div className="TnC-container_header">
                PERSYARATAN ADMINISTRATIF
              </div>
              <div className="TnC-container_body">
                <li className="TnC-container-body_list">
                  Mengisi formulir yang disediakan
                </li>
                <li className="TnC-container-body_list">
                  Melampirkan pas foto formal
                </li>
                <li className="TnC-container-body_list">
                  Melampirkan surat pernyataan telah menerima beasiswa dari lembaga pemberi beasiswa sebelumnya
                </li>
                <li className="TnC-container-body_list">
                  Melampirkan surat rekomendasi (optional)
                </li>
                <li className="TnC-container-body_list">
                  Melampirkan fotocopy Kartu Tanda Mahasiswa (KTM)
                </li>
                <li className="TnC-container-body_list">
                  Melampirkan proposal penelitian sesuai dengan sistematika proposal penelitian yang ditentukan
                </li>
              </div>

              <div className="TnC-container_header">
                KEWAJIBAN PESERTA SELAMA PROGRAM
              </div>
              <div className="TnC-container_body">
                <li className="TnC-container-body_list">
                  Wajib mengikuti seluruh rangkaian program YIF
                </li>
                <li className="TnC-container-body_list">
                  Wajib mengerjakan seluruh tugas yang telah diberikan selama rangakian program YIF
                </li>
                <li className="TnC-container-body_list">
                  Selama mengikuti program wajib menaati semua peraturan dan norma yang diberlakukan
                </li>
              </div>
            </div>
          </div>
          <div ref={tnc_checklist => this.tnc_checklist = tnc_checklist}>
          <Form.Field>
            <Checkbox label='Saya mengerti, tunduk, dan bersedia mengikuti semua Ketentuan dan Kondisi yang berlaku' />
          </Form.Field>
            <div className="button-tncmodul">
              <NavLink
                style={{
                  justifyContent: "end",
                  color: "white",
                  backgroundColor: "#e40c2b",
                  border: "1px solid #e40c2b",
                  borderRadius: "5%",
                  cursor: "pointer",
                  fontSize: "0.6em",
                  padding: 5,
                  marginLeft: "8%",
                  textAlign: "center"
                }}
                exact to="/form">
                  Daftar Sekarang
              </NavLink>
            </div>
          </div>
        </TnCModal>
      </div>
    );
  }
}

export default Tncmodul;