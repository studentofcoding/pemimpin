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

import React, {Component} from 'react';
import './App.css';
import logo_pemimpin from './image/Logo.png';

// Program Development Import & related
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import PD_1 from './image/PD-1.png';
import PD_2 from './image/PD-2.png';
import PD_3 from './image/PD-3.png';
import PD_4 from './image/PD-4.png';
import PD_5 from './image/PD-5.png';

// Tujuan section import & related
import Imgtujuan_1 from './image/Tujuan_1-small.png';
import Imgtujuan_2 from './image/Tujuan_2-small.png';
import Imgtujuan_3 from './image/Tujuan_3-small.png';

// Custom CSS (for Carousel arrow etc)
import './custom.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

// ? FAQ Related 
import FAQ from './FAQ';
// import 'semantic-ui-css/semantic.min.css'
// import Navbar from './Navbar';


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



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isHide:true,
      showNotif: true,
    };
    this.isNewsletterHide = this.isNewsletterHide.bind(this)
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

  /*
    Close the Sliding Panel a.k.a Newsletter
  */

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

  render() {
    return (

      <div className="web-container">
        
        {/* Notification Panel Content
        <div className="notif-panel">
          {this.state.showNotif && <NotificationPanel onClose={this.closeNotif} />}
        </div> */}

        {/* Navigation Section */}
        <header className="navigation-container_grid">
          <div className="logo-container">
            <div className="logo-container_container">
              <img src={logo_pemimpin} alt="y-logo" className="app-logo"/>
            </div>
          </div>
          <div className="navigation-container">
            <div className="menu_container">
              <div className="navigation_item">About</div>
              <div className="navigation_item">Term & Condition</div>
              <div className="navigation_item">Contact</div>
              <div className="navigation_item">Login</div>
            </div>
          </div>
        </header>

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
            <button className="cta-button">
              Enroll now
            </button>
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

export default App;
