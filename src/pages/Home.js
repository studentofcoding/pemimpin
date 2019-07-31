/**
 * This is the class name and for the corelated section of the page :
 * *  notif-panel               = Notification Panel content
 * *  herosho-section           = Hero-shot Section content
 * *  highlights-panel_grid     = Highlight Panel Grid
 * *                            ==> hp-header_column      = Header section of Highlight Panel
 * *                            ==> hp-body_column        = Body section of Highlight Panel
 * *                            ==> hp-body_container     = Container for body Highlight content
 * *                            ==> ht-section_paragraph            = 6 content's of Highlight content
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
import Modal from 'react-modal';
var TnCModal = Modal;
const tncStyles = {
  content : {
    padding               : '50px',
  }
};
TnCModal.setAppElement('#root');


// const NotificationPanel = (props) => 
// <header>
//   <div className="notif-container">
//     <div className="notif-details">
//       By accessing and using this website, you acknowledge that you have read and understand our <a href=".">Cookie Policy</a>, <a href=".">Privacy Policy</a>, and our <a href=".">Term of Service</a>.
//     </div>
//     <button onClick={props.onClose} className="notif-button">
//       Got it
//     </button>
//   </div>
// </header>;



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
    this.isNewsletterHide = this.isNewsletterHide.bind(this);
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
    Show the isNewsletterHide after scrolling 1/3 of page
  */

  isNewsletterHide(){
    let {isHide} = this.state;
    window.scrollY > 500 && this.prev ?
    isHide && this.setState({isHide:false})
    :
    !isHide && this.setState({isHide:false})
    this.prev = window.scrollY;
  }

  /*
    Calling the isNewsletterHide function & Unmount it
  */

  componentDidMount(){
    window.addEventListener('scroll',this.isNewsletterHide);
  }

  componentWillUnmount() {
    window.addEventListener('scroll',this.isNewsletterHide);
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

  closeNewsletter = () => {
    this.setState({
      isHide: true,
    })
    let newsletterPanel = document.getElementById('newsletter-container')
    if (newsletterPanel.style.display !== "none") {
      newsletterPanel.style.display = "none";
      setTimeout(function() {       
        newsletterPanel.style.display = "fixed";
      }, 100 * 6000);
    }
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
    // Checklist on Click label
    // const [tncCheck, setTncCheck] = useState(false);
    // const onClickTncCheck = ()=>{
    //   setTncCheck(!tncCheck)
    // }
    return (

      <div className="web-container">
        
        {/* Notification Panel Content
        <div className="notif-panel">
          {this.state.showNotif && <NotificationPanel onClose={this.closeNotif} />}
        </div> */}

        <Navbar/>

        {/* Header Section */}
        <div className="heroshot-section">
          <div className="top-details">
            <h2
              className="top-header"
              style={{fontFamily:"Ubuntu", fontWeight:"lighter", marginTop:15, marginBottom:15}}
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
              Young Innovators Fellowship merupakan program akselerasi inovasi kepemimpinan yang
              terintegrasi bagi pemimpin muda yang berasal dari kampus. Saat ini, pilot program
              dikhususkan kepada mahasiswa tingkat akhir yang berada di Jakarta dan Bandung.
              Program ini meliputi pendampingan riset/skripsi yang inovatif, mentoring keahlian, dan
              pembekalan karir professional pasca kampus, yang akan berlangsung selama 9 bulan.
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
                    <li className="TnC-container-body_list">
                      Mahasiswa S1 dari ITB, UI, IPB, UNJ, Unpad, dan UPI
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
                      Jika pernah menerima beasiswa berikut akan diprioritaskan:
                      <span>-></span>Bidik Misi, 
                      <span>-></span>Rumah Kepemimpinan, 
                      <span>-></span>Bakti Nusa, 
                      <span>-></span>Beastudi Etos, 
                      <span>-></span>Karya Salemba Empat, 
                      <span>-></span>Kader Surau YBM BRI, dan 
                      <span>-></span>LAZ Salman.
                    </li>
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
                <input onClick={this.toggleTncCheck} checked={this.state.isTncCheck} type="checkbox"/>
                {/* <input type="checkbox"/> */}
                  <label onClick={this.toggleTncCheck} className="TnC-checkmark_label">
                  {/* <label className="TnC-checkmark_label"> */}
                    Saya mengerti, tunduk, dan bersedia mengikuti semua Ketentuan dan Kondisi yang berlaku
                  </label>
                <span class="checkmark">
                </span>
                <button 
                style={{
                  alignItems: "center", 
                  color: "white",
                  backgroundColor: "#e40c2b", 
                  border: "1px solid #e40c2b",
                  borderRadius: "10%",
                  cursor: "pointer"
                  }} 
                  onClick={this.handleTnC_Close}>
                  Daftar Sekarang!
                </button>
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
                infinite
                centered
                animationSpeed={1500}
                autoPlay={3500}
                stopAutoPlayOnHover
                offset={20}
                breakpoints={{
                  1000: { // these props will be applied when screen width is less than 1000px
                    slidesPerPage: 2,
                    clickToChange: false,
                    centered: true,
                    arrows: true,
                    infinite: true,
                    animationSpeed: 2000,
                  },
                  500: {
                    slidesPerPage: 1,
                    slidesPerScroll: 1,
                    clickToChange: false,
                    centered: true,
                    animationSpeed: 2000,
                    infinite: true,
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


        {/* Sliding Panel (Newsletter) Content
        <div 
        id={classwhenHide||"newsletter-container"}
        >
          <div className="newsletter-details">
            <h3 style={{margin:0, fontSize:"0.9em"}}>
              Get latest updates in web technologies
            </h3>
            <i 
              style={{fontSize:"0.6em"}}
              className="fa"
              onClick={this.closeNewsletter}
            >
                &#xf00d;
            </i>
            <p className="p-newsletter">
              I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
            </p>
          </div>
          <div className="newsletter-form">
            <input 
              name="email" 
              type="email" 
              placeholder="Email address" 
              className="newsletter-input"
            />
            <button 
              className="newsletter-button"
              onClick={this.closeNewsletter}
            >
              Count me in!
            </button>
          </div>
        </div> */}

        {/* Footer Content */}
        <footer className="footer_grid">
          <div className="footer-about-container">
            <div className="footer-about_header">
              PEMIMPIN.CO
            </div>
            <div className="footer-about_body">
              Pemimpin.co adalah salah satu inisiatif dari DeepSpace konsorsium
              untuk perubahan sosial di Indonesia.
            </div>
            <div className="footer-about_alamat">
              Jln. Melawai X No.9, RT.2/RW.6, Melawai, Kota Jakarta Selatan, 
              DKI Jakarta 12160
            </div>
          </div>
          <div className="footer-contact-container">
            <div className="footer-contact_container">
              <div className="footer-contact_header">
                Kontak kami
              </div>
              <div className="footer-contact_item">
                <div className="footer-contact-item_1">
                  0812-9821-9099
                </div>
                <div className="footer-contact-item_1">
                  program@pemimpin.co
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;