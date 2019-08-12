/**
 * This is the class name and for the corelated section of the page :
 * *  notif-panel               = Notification Panel content
 * *  herosho-section           = Hero-shot Section content
 * *  highlights-panel_grid     = Highlight Panel Grid
 * *                            ==> hp-header_column      = Header section of Highlight Panel
 * *                            ==> hp-body_column        = Body section of Highlight Panel
 * *                            ==> hp-body_container     = Container for body Highlight content
 * *                            ==> ht-section_paragraph  = 6 content's of Highlight content
 * *  newsletter-container (id) = Sliding Panel
 * *  newsletterhide       (id) = Sliding Panel (when hidden)
 * *  footer                    = Footer content
 */

import React, { Component } from 'react';
import '../App.css';
// import logo_pemimpin from '../image/Logo.png';

// Navbar related
import Navbar from '../Navbar';

// Program Development Import & related
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import PD_1 from '../image/PD-1.png';
import PD_2 from '../image/PD-2.png';
import PD_3 from '../image/PD-3.png';
import PD_4 from '../image/PD-4.png';
import PD_5 from '../image/PD-5.png';

// Tujuan section import & related
import Imgtujuan_1 from '../image/Tujuan_1-small.png';
import Imgtujuan_2 from '../image/Tujuan_2-small.png';
import Imgtujuan_3 from '../image/Tujuan_3-small.png';

// Custom CSS (for Carousel arrow etc)
import '../custom.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

// ? FAQ Related
import FAQ from './FAQ';

// T&C Modal
// import Tncmodul from '../components/Tncmodul';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import { Form, Checkbox } from 'semantic-ui-react';

var TnCModal = Modal;
const tncStyles = {
  content : {
    padding               : '50px',
  }
};
TnCModal.setAppElement('#root');

class Home extends Component {

  constructor(props){
    // const [modalShow, setModalShow] = useState(false);
    super(props);
    this.state={
      isHide:true,
      showNotif: true,
      isTnCOpen: false,
      isTncCheck: false,
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
    Close the Notification Panel
  */

  closeNotif = () => {
    this.setState({
      showNotif: false,
    })
    document.getElementsByClassName("notif-panel")[0].style.padding = "0px";
  };

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

    this.tnc_checklistLabel.style.display = 'flex';
    this.tnc_checklistLabel.style.flexFlow = 'row';
    this.tnc_checklistLabel.style.paddingTop = '10px';
    this.tnc_checklistLabel.style.paddingBottom = '80px';
    this.tnc_checklistLabel.style.position = 'sticky';
    this.tnc_checklistLabel.style.bottom = '-80px';
    this.tnc_checklistLabel.style.marginBottom = '-80px';
    this.tnc_checklistLabel.style.backgroundColor = 'white';
  }

  handleTnC_Close () {
    this.setState({
      isTnCOpen: false
    });
  }


  render() {
    return (
      <div className="web-container">

        <Navbar/>

        <div className="inner_web-container">
          {/* Header Section */}
          <div className="heroshot-section">
            <div className="top-details">
              <h2
                className="top-header"
                style={{fontFamily:"Ubuntu", fontWeight:"bold", marginTop:15, marginBottom:15}}
              >
                YOUNG INNOVATORS FELLOWSHIP
              </h2>
              <h2
              className="top-desc"
              style={{fontFamily:"Ubuntu", fontSize:"2.4em", marginTop:15, marginBottom:15}}
              >
                Indonesia want You !
              </h2>
              <p
                className="top-p"
                style={{marginTop:15, marginBottom:15}}
              >
               Young Innovators Fellowship merupakan program akselerasi inovasi kepemimpinan yang terintegrasi bagi pemimpin muda yang berasal dari kampus di Jabodetabek dan Bandung.
              </p>
              <button className="cta-button" onClick={this.handleTnC_Open}>
                Daftar Sekarang
              </button>

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
                    Hak cipta hasil penelitian tetap berada pada peneliti dan kampus, akan tetapi pemimpin.co diberikan hak untuk mempublikasikan sebagian atau seluruh hasil skripsi.
                  </li>
                  <li className="TnC-container-body_list">
                    Pemimpin.co memiliki hak menggunakan hasil penelitian tersebut untuk kepentingan pengembangan ekosistem kepemipinan di Indonesia dengan tetap memperhatikan etika ilmiah dan bebas dari unsur kejahatan akademik.
                  </li>
                  <li className="TnC-container-body_list">
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
          <div ref={tnc_checklistLabel => this.tnc_checklistLabel = tnc_checklistLabel}>
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
          </div>

          {/* Tujuan Section */}
          <div
            className="tujuan-header-container_grid"
          >

            {/* Tujuan Header  */}
            <div
            className="hp-header_column"
            style={{
                marginTop:80,
                marginBottom:20
            }}
            >
              <h2
                className="tujuan-header"
                style={{fontFamily:"Ubuntu", fontSize:"1.8em", color:"white"}}
              >
                Tujuan
              </h2>
            </div>

            {/* HP Body  */}
            <div className="hp-body_column"
              style={{
                marginBottom:80,
              }}
            >
              <div className="hp-body_container">
                <div className="tujuan-section_container">
                  <div className="t-section-container_grid">
                    <div className="t-section-container_icon">
                      <img src={Imgtujuan_1} alt="tujuan-1" />
                    </div>
                    <div className="t-section-container-inner">
                      <div className="t-section-container-inner_judul">
                        <h3 style={{fontFamily:"Ubuntu", margin:0, fontSize:"0.9em"}}>
                          Riset Inovatif
                        </h3>
                      </div>
                      <div className="t-section-container-inner_description">
                        <p className="t-section_paragraph">
                          Program ini akan membantu kamu menghasilkan riset yang inovatif melalui tugas akhir
                          yang kamu kerjakan. Kami harap dengan ini riset kamu bisa lebih berdampak di
                          masyarakat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tujuan-section_container">
                  <div className="t-section-container_grid">
                    <div className="t-section-container_icon">
                      <div className="t-section_">
                        <img src={Imgtujuan_2} alt="tujuan-2" />
                      </div>
                    </div>
                    <div className="t-section-container-inner">
                      <div className="t-section-container-inner_judul">
                        <h3 style={{fontFamily:"Ubuntu", margin:0, fontSize:"0.9em"}}>
                          Pengembangan Keahlian
                        </h3>
                      </div>
                      <div className="t-section-container-inner_description">
                        <p className="t-section_paragraph">
                          Program ini akan membantu kamu bertemu dengan mentor-mentor yang sesuai dengan
                          tujuan karir kamu, melalui magang profesional kamu juga akan dapat pengalaman kerja
                          baru sebagai modal menghadapi dunia kerja yang sesungguhnya.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tujuan-section_container">
                  <div className="t-section-container_grid">
                    <div className="t-section-container_icon">
                      <img src={Imgtujuan_3} alt="tujuan-3" />
                    </div>
                    <div className="t-section-container-inner">
                      <div className="t-section-container-inner_judul">
                        <h3 style={{fontFamily:"Ubuntu", margin:0, fontSize:"0.9em"}}>
                          Pengayaan Karir
                        </h3>
                      </div>
                      <div className="t-section-container-inner_description">
                        <p className="t-section_paragraph">
                          Program ini akan membekali kamu dengan materi-materi persiapan pasca kampus
                          sehingga pengetahuan kamu tentang dunia kerja akan lebih kaya, dengan itu kamu juga
                          jadi lebih siap untuk menghadapi dunia kerja.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Development Section */}
          <div className="highlights-panel-tujuan_grid">

            {/* Program Development Header  */}
            <div
              className="program-development-section-header_column"
              style={{
                  marginTop:10,
                  marginBottom:10
              }}
            >
              <h2
                className="program-development-header"
                style={{marginTop:80, fontSize:"1.8em"}}
              >
                Program Development
              </h2>
            </div>

            {/* Program Development Body  */}
            <div className="program-development-section-body_container">
              <Carousel
                  slidesPerPage={3}
                  arrows
                  centered
                  infinite
                  animationSpeed={1500}
                  autoPlay={3500}
                  stopAutoPlayOnHover
                  offset={0}
                  breakpoints={{
                    768: { // these props will be applied when screen width is less than 1000px
                      slidesPerPage: 1,
                      slidesPerScroll: 1,
                      clickToChange: false,
                      centered: true,
                      offset: 0,
                      infinite: true,
                      arrows: true,
                      animationSpeed: 2000,
                    },
                    400: {
                      slidesPerPage: 1,
                      slidesPerScroll: 1,
                      clickToChange: false,
                      centered: true,
                      animationSpeed: 2000,
                      infinite: true,
                      offset: 0,
                    },
                  }}
                >
                <img alt="PD-1" src={PD_1} />
                <img alt="PD-2" src={PD_2} />
                <img alt="PD-3" src={PD_3} />
                <img alt="PD-4" src={PD_4} />
                <img alt="PD-5" src={PD_5} />
              </Carousel>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className="faq-section"
            style={{backgroundColor:"#c11032"}}
          >
            <div className="faq-section_container">
              {/* FAQ Header */}
              <div
                className="faq-section-header_column"
                style={{
                    marginTop:10,
                    marginBottom:10
                }}
                >
                  <h2
                    className="faq-header"
                    style={{color:"white", marginTop:80, fontSize:"1.8em"}}
                  >
                    F.A.Q
                  </h2>
                </div>

              {/* FAQ Body */}
              <div className="faq-section-body_column">
                <FAQ />
              </div>
            </div>
          </div>

          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
