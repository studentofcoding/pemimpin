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
import '../../../App.css';

// Navbar related
import Navbar from '../../components/Navbar';

// Program Development Import & related
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import PD_1 from '../../../image/PD-1.png';
import PD_2 from '../../../image/PD-2.png';
import PD_3 from '../../../image/PD-3.png';
import PD_4 from '../../../image/PD-4.png';
import PD_5 from '../../../image/PD-5.png';

// Tujuan section import & related
import Imgtujuan_1 from '../../../image/Tujuan_1-small.png';
import Imgtujuan_2 from '../../../image/Tujuan_2-small.png';
import Imgtujuan_3 from '../../../image/Tujuan_3-small.png';

// Custom CSS (for Carousel arrow etc)
import './custom.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

// ? FAQ Related
import FAQ from './FAQ';

// T&C Modal
// import Tncmodul from '../components/Tncmodul';
import Modal from 'react-modal';
// import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Button } from 'semantic-ui-react';
import RegisUser from '../auth/Regis_user';

let Registermodul = Modal;

let registerStyles = {
  content : {
    padding     : '0px',
    height      : '100%',
    width       : 'auto'
  }
};
Registermodul.setAppElement('#root');

class Home extends Component {

  constructor(props){
    // const [modalShow, setModalShow] = useState(false);
    super(props);
    this.state={
      showNotif: true,
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

  render() {
    console.log(this.state,"currentState");
    const { isRegisterButtonOpen } = this.state;

    return (
      <div className="web-container">

        <Navbar/>

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

        <div className="inner_web-container">
          {/* Header Section */}
          <div className="heroshot-section">
            <div className="top-details">
              <h2
                className="top-header"
                style={{fontFamily:"Ubuntu,sans serif", fontWeight:"bold", marginTop:15, marginBottom:15}}
              >
                YOUNG INNOVATORS FELLOWSHIP
              </h2>
              <h2
              className="top-desc"
              style={{fontFamily:"Ubuntu,sans serif", fontSize:"2.4em", marginTop:15, marginBottom:15}}
              >
                Indonesia want You !
              </h2>
              <p
                className="top-p"
                style={{marginTop:15, marginBottom:15}}
              >
               Young Innovators Fellowship merupakan program akselerasi inovasi kepemimpinan yang terintegrasi bagi pemimpin muda yang berasal dari kampus di seluruh Indonesia.
              </p>
              <button className="cta-button" onClick={this.openRegisterModul}>
                Daftar Sekarang
              </button>

              {/* Term and Condition Section */}
        <Registermodul
          isOpen={this.state.isModulOpen}
          onAfterOpen={this.afterModulOpen}
          onRequestClose={this.closeRegisterModul}
          style={registerStyles}
          contentLabel="Term and Conditions"
        >
          {/* <h2 ref={modul_header => this.modul_header = modul_header}>Masukan data dirimu dibawah</h2> */}
          <div className="TnC_container-outer">
                <RegisUser />
            {/* <div className="TnC_container-inner">
              <div className="TnC-container_body">
              </div>
            </div> */}
          </div>
          {/* <div ref={modul_checklist => this.modul_checklist = modul_checklist}>
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
          </div> */}
        </Registermodul>
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
                style={{fontFamily:"Ubuntu,sans serif", fontSize:"1.8em", color:"white"}}
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
                        <h3 style={{fontFamily:"Ubuntu,sans serif", margin:0, fontSize:"0.9em"}}>
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
                        <h3 style={{fontFamily:"Ubuntu,sans serif", margin:0, fontSize:"0.9em"}}>
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
                        <h3 style={{fontFamily:"Ubuntu,sans serif", margin:0, fontSize:"0.9em"}}>
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
                    style={{color:"white", marginTop:80}}
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
